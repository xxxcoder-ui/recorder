// Import.
var fs = require('fs');

/**
 * Append zero to length.
 * @param {string} value Value to append zero.
 * @param {number} length Needed length.
 * @returns {string}
 */
function appendZeroToLength(value, length) {
  var correctValue = value;
  if (length > value.toString().length) {
    if (value !== 'undefined' && value.toString().length !== length) {
      // Add zero to correct length.
      for (var i = 0; i < length - value.toString().length; i++) {
        correctValue = '0' + correctValue;
      }
    }
  }
  return correctValue;
}

/**
 * Get date as text.
 * @returns {string} Date as text. Sample: "2018.12.03, 07:32:13.0162 UTC".
 */
function getDateAsText() {
  var now = new Date();
  var nowText = appendZeroToLength(now.getUTCFullYear(), 4) + '.'
    + appendZeroToLength(now.getUTCMonth() + 1, 2) + '.'
    + appendZeroToLength(now.getUTCDate(), 2) + ', '
    + appendZeroToLength(now.getUTCHours(), 2) + ':'
    + appendZeroToLength(now.getUTCMinutes(), 2) + ':'
    + appendZeroToLength(now.getUTCSeconds(), 2) + '.'
    + appendZeroToLength(now.getUTCMilliseconds(), 4) + ' UTC';
  return nowText;
}

/**
 * Log to file.
 * @param {string} text Text to log.
 * @param {string} [file] Log file path.
 */
function logToFile(text, file) {
  // Define file name.
  var filename = file !== undefined ? file : 'default.log';
  // Define log text.
  var logText = getDateAsText() + ' -> ' + text + '\r\n';
  // Save log to file.
  fs.appendFile(filename, logText, 'utf8', function (err) {
    if (err) {
      // If error - show in console.
      console.log(getDateAsText() + ' -> ' + err);
    }
  });
}

// Export.
module.exports = logToFile;