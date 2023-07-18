import mongoose from 'mongoose';
import * as crypto from 'crypto';

// Scheme
const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      max: 32,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      require: true,
      lowercase: true,
    },
    hashedPassword: {
      type: String,
      require: true,
    },
    salt: String,
    role: {
      type: String,
      default: 'subscriber',
    },
    resetPasswordLink: {
      data: String,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual
userScheme
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// Methods
userScheme.methods = {
  authenticate: function (plainPassword) {
    return this.encryptPassword(plainPassword) === this.hashedPassword;
  },
  encryptPassword: function (password) {
    if (!password) return '';

    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    } catch (err) {
      return '';
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()).toString();
  },
};

export default mongoose.model('User', userScheme);
