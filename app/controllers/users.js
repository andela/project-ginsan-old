/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Notification = mongoose.model('Notification');
    avatars = require('./avatars').all(),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    validator = require('./validators');

/**
 * Auth callback
 */

exports.authCallback = function (req, res, next) {
  res.redirect('/chooseavatars');
};

/**
 * Show login form
 */
exports.signin = function (req, res) {
  if (!req.user) {
    res.redirect('/#!/signin?error=invalid');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Show sign up form
 */
exports.signup = function (req, res) {
  if (!req.user) {
    res.redirect('/#!/signup');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Logout
 */
exports.signout = function (req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * Session
 */


exports.getAllUser = function (req, res) {
  console.log(req.query.name);
  var query = '/^'+ req.query.name +'/i';
  User.find({name:eval(query)}).exec().then(function (users) {
    console.log(users);
    if(!users) {
      return res.send('There are no users');
    }
    if(users.length <= 0) {
      return res.status(400).json({
        status:false,
        message:"No users"
      });
    }
    var editedUsers = users.map(function(user){
      return {
        id: user._id,
        name:user.name,
        email: user.email
      }
    });
    return res.status(200).json(editedUsers);
  }).catch(function (err) {
    return res.send("Opps!!, something went wrong");
  });
};
    



exports.session = function(req, res) {
  res.redirect('/');
};
/** 
 * Check avatar - Confirm if the user who logged in via passport
 * already has an avatar. If they don't have one, redirect them
 * to our Choose an Avatar page.
 */

exports.checkAvatar = function(req, res) {
  if (req.user && req.user._id) {
    User.findOne({
      _id: req.user._id
    })
      .exec(function (err, user) {
        if (user.avatar !== undefined) {
          res.redirect('/#!/');
        } else {
          res.redirect('/#!/choose-avatar');
        }
      });
  } else {
    // If user doesn't even exist, redirect to /
    res.redirect('/');
  }

};


exports.login = function (req, res) {
  passport.authenticate('local', function (err, user, info) {
    var token;
    if (err) {
      res.status(404).json(err);
      return;
    }
    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        success: true,
        message: 'Successfully logged on.',
        token: token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};

/**
 * Create user
 */
exports.create = function (req, res) {
  if (req.body.name && req.body.password && req.body.email) {
    var passCheck = validator.validatePass(req.body.password),
        emailCheck = validator.validateEmail(req.body.email);
    console.log(emailCheck);
    if (!emailCheck) {
      
      return res.status(401).json({
        success: false,
        message: "The email is not valid",
        token: false
      });
    }
    if (!passCheck.status) {
      return res.status(401).json({
        success: false,
        message: passCheck.error,
        token: false
      });
    }
    User.findOne({
      email: req.body.email
    }).exec(function (err, existingUser) {
      if (!existingUser) {
        var user = new User(req.body);
        // Switch the user's avatar index to an actual avatar url
        user.avatar = avatars[user.avatar];
        user.provider = 'local';
        user.save(function (err) {
          if (err) {
            res.status(401);
            res.json({
              success: false,
              error:true,
              message: 'Unsuccesful signup',
              token: false
            });
          }
          var token;
          token = user.generateJwt();
          req.logIn(user, function (err) {
            if (err) return next(err);
            res.status(200);
            res.json({
              userId:user._id,
              success: true,
              message: 'Successful signup',
              token: token
            });
          });
        });

      } else {
        res.status(401);
        res.json({
          success: false,
          error:true,
          message: 'There is an existing user with this email',
          token: false
        });
      }
    });
  } else {
    res.status(400)
    res.json({
      success: false,
      error:true,
      message: 'Please fill the required fields',
      token: false
    });
  }
};


exports.saveFriends = function (req, res) {
  var userId = mongoose.Types.ObjectId(req.params.user);
  var oldFriendsList = [];
  if (req.params.user && typeof req.body.friends === 'object') {
    User.findOne({ _id: userId }, function (err, user) {
      if (err) throw err;
      if (!user) {
        
        return res.status(400).res.json({
          status: false,
          error: true,
          message: "User not found"
        });
      }
      //check for duplicates
      for (var i = 0; i < req.body.friends.length; i++) {
        if (user.friends.indexOf(req.body.friends[i]) < 0) {
          user.friends.push(req.body.friends[i]);
          user.save();
        }
      };
      return res.status(200).json({
        status: true,
        error: false,
        message: "Successfully added"
      });


    });
  }
  return res.status(400).res.json({
    status:false,
    error:true,
    message:'Send the required parameters'
  });
};


/**
 * Get all friends
 */

// exports.getFriends = function (req, res) {
//   if(!req.params.user) {
//     return res.status(400).json({
//       status:false,
//       error:true,
//       message:"Pass in the user id"
//     });
//   }
//   var friends = [];
//   var userId = mongoose.Types.ObjectId(req.params.user);
//   User
  
// }

exports.sendUserInvites = function (req, res) {
  var fromId = mongoose.Types.ObjectId(req.params.fromUser);
  var toId = mongoose.Types.ObjectId(req.params.to);
  var link = req.body.link;
  var userName;
  var message = ' ';
  //find the name of who sent it
  User.findOne({ _id: fromId }).exec().then(function (user) {
    userName = user.name;
    console.log(userName);
    message = userName + " sent a game invite to you.";
    // Send notification
    var notify = new Notification({ forUser: toId, message: message, link: req.body.link });
    return notify.save();
  }).then(function (success) {
    console.log('got ere')
    res.json({
      status: true,
      error: false,
      message: "Invite sent successfully"
    });
  }, function (err) {
    console.log(err, 'this is an error')
    res.status(500);
    return res.json({
      status:false,
      error:true,
      message:"Internal server error"
    });
  });

};


exports.deleteUser = function (req, res) {
  console.log(req.params.email);
  User.findOneAndRemove({ email: req.params.email }, function (err, user) {
    if(err) throw err;
    res.status(202);
    return res.json({
        success:true,
        message:'User successfully deleted',
        token:false
      });
  });
};

/**
 * Assign avatar to user
 */
exports.avatars = function (req, res) {
  // Update the current user's profile to include the avatar choice they've made
  if (req.user && req.user._id && req.body.avatar !== undefined &&
    /\d/.test(req.body.avatar) && avatars[req.body.avatar]) {
    User.findOne({
      _id: req.user._id
    })
      .exec(function (err, user) {
        user.avatar = avatars[req.body.avatar];
        user.save();
      });
  }
  return res.redirect('/#!/app');
};

exports.addDonation = function (req, res) {
  if (req.body && req.user && req.user._id) {
    // Verify that the object contains crowdrise data
    if (req.body.amount && req.body.crowdrise_donation_id && req.body.donor_name) {
      User.findOne({
        _id: req.user._id
      })
        .exec(function (err, user) {
          // Confirm that this object hasn't already been entered
          var duplicate = false;
          for (var i = 0; i < user.donations.length; i++) {
            if (user.donations[i].crowdrise_donation_id === req.body.crowdrise_donation_id) {
              duplicate = true;
            }
          }
          if (!duplicate) {
            console.log('Validated donation');
            user.donations.push(req.body);
            user.premium = 1;
            user.save();
          }
        });
    }
  }
  res.send();
};

/**
 *  Show profile
 */
exports.show = function (req, res) {
  var user = req.profile;

  res.json('users/show', {
    title: user.name,
    user: user
  });
};

/**
 * Send User
 */
exports.me = function (req, res) {
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 */

exports.user = function (req, res, next, id) {
  User
    .findOne({
      _id: id
    })
    .exec(function (err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    });
};