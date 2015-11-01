'use strict';

/**
 * Module dependencies.
 */
var crypto = require('crypto'),
  validator = require('validator');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
  return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
  return (this.provider !== 'local' || validator.isLength(password, 6));
};

/**
 * A Validation function for local strategy email
 */
var validateLocalStrategyEmail = function(email) {
  return ((this.provider !== 'local' && !this.updated) || validator.isEmail(email));
};

/**
 * User Schema
 */
module.exports = function(sequelize, Datatypes) {

  var User = sequelize.define('User', {
    firstName: {
      type: Datatypes.STRING,
      trim: true,
      defaultValue: '',
      validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
      type: Datatypes.STRING,
      trim: true,
      defaultValue: '',
      validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    }
    displayName: {
      type: Datatypes.STRING,
      trim: true;
    }
    email:  {
      type: Datatypes.STRING,
      trim: true,
      unique: true,
      defaultValue: '',
      validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
    },
    username: {
        type: Datatypes.STRING,
        unique: 'Username already exists',
        required: 'Please fill in a username',
        trim: true
    },
    password: {
      type: Datatypes.STRING,
      defaultValue: '',
      validate: [validateLocalStrategyPassword, 'Password should be longer']
    },
    salt: Datatypes.STRING,
    profileImageURL: {
      type: Datatypes.STRING,
      defaultValue: 'modules/users/img/profile/default.png'
    },
    provider: {
      type: Datatypes.STRING,
      required: 'Provider is required'
    },
    providerData: {},
    additionalProvidersData: {},
    roles: {
      type: [{
        Datatypes.STRING,
        enum: ['user', 'admin']
      }],
      defaultValue: ['user']
    },
    updated: {
      type: Datatypes.DATE
    },
    created: {
      type: Datatypes.DATE,
      defaultValue: Datatypes.NOW
    },
    /* For reset password */
    resetPasswordToken: {
      type: Datatypes.STRING
    },
    resetPasswordExpires: {
      type: Datatypes.STRING
    }
  }, {
    instanceMethods: {
      /**
       * Create instance method for hashing a password
       */
      hashPassword: function(password) {
        if (this.salt && password) {
          return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
        } else {
          return password;
        }
      },
      /**
       * Create instance method for authenticating user
       */
      authenticate: function(password) {
        return this.password === this.hashPassword(password);
      }
    },
    statics: {
      /**
       * Find possible not used username
       */
      findUniqueUserName: function(username, suffix, callback) {
        var _this = this;
        var possibleUsername = username + (suffix || '');

        _this.findOne({
          username: possibleUsername
        }, function(err, user) {
          if (!err) {
            if (!user) {
              callback(possibleUsername);
            } else {
              return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
          } else {
            callback(null);
          }
        });
      }
    }
  });
};

/**
 * Hook a pre save method to hash the password
 */
/*UserSchema.pre('save', function(next) {
  if (this.password && this.isModified('password') && this.password.length > 6) {
    this.salt = crypto.randomBytes(16).toString('base64');
    this.password = this.hashPassword(this.password);
  }
  next();
});*/
