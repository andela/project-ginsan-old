/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  User = mongoose.model('User');
var avatars = require('./avatars').all();
var jwt = require('jsonwebtoken');
var passport = require('passport');

/**
 * Auth callback
 */
<<<<<<< HEAD
exports.authCallback = function (req, res, next) {

=======
exports.authCallback = function(req, res, next) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  res.redirect('/chooseavatars');
};

/**
 * Show login form
 */
<<<<<<< HEAD
exports.signin = function (req, res) {
=======
exports.signin = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  if (!req.user) {
    res.redirect('/#!/signin?error=invalid');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Show sign up form
 */
<<<<<<< HEAD
exports.signup = function (req, res) {
=======
exports.signup = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  if (!req.user) {
    res.redirect('/#!/signup');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Logout
 */
<<<<<<< HEAD
exports.signout = function (req, res) {
=======
exports.signout = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  req.logout();
  res.redirect('/');
};

/**
 * Session
 */
<<<<<<< HEAD
exports.session = function (req, res) {
  res.redirect('/');
};


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



=======
exports.session = function(req, res) {
  res.redirect('/');
};

>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
/** 
 * Check avatar - Confirm if the user who logged in via passport
 * already has an avatar. If they don't have one, redirect them
 * to our Choose an Avatar page.
 */
<<<<<<< HEAD
exports.checkAvatar = function (req, res) {
=======
exports.checkAvatar = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  if (req.user && req.user._id) {
    User.findOne({
      _id: req.user._id
    })
<<<<<<< HEAD
      .exec(function (err, user) {
        if (user.avatar !== undefined) {
          res.redirect('/#!/');
        } else {
          res.redirect('/#!/choose-avatar');
        }
      });
=======
    .exec(function(err, user) {
      if (user.avatar !== undefined) {
        res.redirect('/#!/');
      } else {
        res.redirect('/#!/choose-avatar');
      }
    });
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  } else {
    // If user doesn't even exist, redirect to /
    res.redirect('/');
  }

};

/**
 * Create user
 */
<<<<<<< HEAD
exports.create = function (req, res) {
  if (req.body.name && req.body.password && req.body.email) {
    User.findOne({
      email: req.body.email
    }).exec(function (err, existingUser) {
=======
exports.create = function(req, res) {
  if (req.body.name && req.body.password && req.body.email) {
    User.findOne({
      email: req.body.email
    }).exec(function(err,existingUser) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
      if (!existingUser) {
        var user = new User(req.body);
        // Switch the user's avatar index to an actual avatar url
        user.avatar = avatars[user.avatar];
        user.provider = 'local';
<<<<<<< HEAD
        user.save(function (err) {
          if (err) {
            res.json({
              success: false,
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
              success: true,
              message: 'Successful signup',
              token: token
            });
          });
        });

      } else {
        res.json({
          success: false,
          message: 'There is an existing user with this email',
          token: false
        });
      }
    });
  } else {
    res.json({
      success: false,
      message: 'Please fill the required fields',
      token: false
    });
=======
        user.save(function(err) {
          if (err) {
            return res.render('/#!/signup?error=unknown', {
              errors: err.errors,
              user: user
            });
          }
          req.logIn(user, function(err) {
            if (err) return next(err);
            return res.redirect('/#!/');
          });
        });
      } else {
        return res.redirect('/#!/signup?error=existinguser');
      }
    });
  } else {
    return res.redirect('/#!/signup?error=incomplete');
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  }
};

/**
 * Assign avatar to user
 */
<<<<<<< HEAD
exports.avatars = function (req, res) {
=======
exports.avatars = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  // Update the current user's profile to include the avatar choice they've made
  if (req.user && req.user._id && req.body.avatar !== undefined &&
    /\d/.test(req.body.avatar) && avatars[req.body.avatar]) {
    User.findOne({
      _id: req.user._id
    })
<<<<<<< HEAD
      .exec(function (err, user) {
        user.avatar = avatars[req.body.avatar];
        user.save();
      });
=======
    .exec(function(err, user) {
      user.avatar = avatars[req.body.avatar];
      user.save();
    });
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  }
  return res.redirect('/#!/app');
};

<<<<<<< HEAD
exports.addDonation = function (req, res) {
=======
exports.addDonation = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  if (req.body && req.user && req.user._id) {
    // Verify that the object contains crowdrise data
    if (req.body.amount && req.body.crowdrise_donation_id && req.body.donor_name) {
      User.findOne({
        _id: req.user._id
      })
<<<<<<< HEAD
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
=======
      .exec(function(err, user) {
        // Confirm that this object hasn't already been entered
        var duplicate = false;
        for (var i = 0; i < user.donations.length; i++ ) {
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
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
    }
  }
  res.send();
};

/**
 *  Show profile
 */
<<<<<<< HEAD
exports.show = function (req, res) {
  var user = req.profile;

  res.json('users/show', {
=======
exports.show = function(req, res) {
  var user = req.profile;

  res.render('users/show', {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
    title: user.name,
    user: user
  });
};

/**
 * Send User
 */
<<<<<<< HEAD
exports.me = function (req, res) {
=======
exports.me = function(req, res) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
<<<<<<< HEAD
exports.user = function (req, res, next, id) {
=======
exports.user = function(req, res, next, id) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
  User
    .findOne({
      _id: id
    })
<<<<<<< HEAD
    .exec(function (err, user) {
=======
    .exec(function(err, user) {
>>>>>>> f7dc48d76004754999c7205503fca05ceb1d79b1
      if (err) return next(err);
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    });
};