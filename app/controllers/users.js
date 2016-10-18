/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  User = mongoose.model('User');
var avatars = require('./avatars').all();
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validator = require('./validators');


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


exports.getAllUser = function (req, res, next) {
  User.find({}, function (err, user) {
    if (err) {
      throw err;
    }

    if (user) {
      res.json(user);
    } else {
      return res.send('There are no users');
    }
  });
};




exports.session = function (req, res) {
  res.redirect('/');
};
/** 
 * Check avatar - Confirm if the user who logged in via passport
 * already has an avatar. If they don't have one, redirect them
 * to our Choose an Avatar page.
 */

exports.checkAvatar = function (req, res) {
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
        user.save(function (err, user) {
          if (err) {
            res.status(401);
            res.json({
              success: false,
              error: true,
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
              userId: user._id,
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
          error: true,
          message: 'There is an existing user with this email',
          token: false
        });
      }
    });
  } else {
    res.status(400)
    res.json({
      success: false,
      error: true,
      message: 'Please fill the required fields',
      token: false
    });
  }
};



exports.deleteUser = function (req, res) {
  User.findOneAndRemove({
    email: req.params.email
  }, function (err, user) {
    if (err) throw err;
    user.remove(function (err) {
      if (err) throw err;

      res.status(202).json({
        success: true,
        message: 'User successfully deleted',
        token: false
      });
    });
  });
};


/**
 * Save friend
 */


exports.saveFriends = function (req, res) {
  var userId = mongoose.Types.ObjectId(req.params.user);
  if (req.params.user && typeof req.body.friends === 'object') {
    User.findOne({
      _id: userId
    }, function (err, user) {
      if (err) throw err;
      if (!user) {
        res.status(400)
        res.json({
          status: false,
          error: true,
          message: "User not found"
        });
      }
      oldFriendsList = user.friends;
      for (var i = 0; i < req.body.friends.length; i++) {
        if (oldFriendsList.indexOf(req.body.friends[i]) < 0) {
          user.friends.push(req.body.friends[i]);
          user.save();
          res.status(200);
          res.json({
            status: true,
            error: false,
            message: "Successfully updated"
          })
        }
      }
    });
  }
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