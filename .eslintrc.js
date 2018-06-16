'use strict';

module.exports = {
  extends: ["airbnb"],

  // Stop ESLint from looking for a configuration file in parent folders
  'root': true,

  rules: {
    "func-names": 0,
    "prefer-arrow-callback": 0,
  }
}
