/* Pass Encrypt — pure legacy algorithm port (C++ compatible).
 * DO NOT "clean up": the chain depends on the numeric value AFTER uppercasing.
 * Input is case-sensitive; no normalization. Suffix is a fixed constant.
 */
(function () {
  'use strict';
  var SUFFIX = '@0616';

  function generatePassword(pw) {
    if (typeof pw !== 'string' || pw.length === 0) return '';
    var prev = pw.charCodeAt(pw.length - 1);
    var out = '';
    for (var i = 0; i < pw.length; i++) {
      var cur = pw.charCodeAt(i);
      var code = 97 + ((cur + prev) % 26);
      if (i === pw.length - 6 || i === pw.length - 3) {
        code -= 32;
      }
      out += String.fromCharCode(code);
      prev = code;
    }
    return out + SUFFIX;
  }

  var api = { generatePassword: generatePassword, SUFFIX: SUFFIX };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    window.PassEncrypt = api;
  }
})();
