/**
 * @module colorStdout
 * @author Rube
 * @date 15/11/16
 * @desc make process.stdout colorful
 */

exports.black = function (text) {
    process.stdout.write('\x1B[30m' + text + '\x1B[39m');
};

exports.red = function (text) {
    process.stdout.write('\x1B[31m' + text + '\x1B[39m');
};

exports.green = function (text) {
    process.stdout.write('\x1B[32m' + text + '\x1B[39m');
};

exports.yellow = function (text) {
    process.stdout.write('\x1B[33m' + text + '\x1B[39m');
};

exports.blue = function (text) {
    process.stdout.write('\x1B[34m' + text + '\x1B[39m');
};

exports.magenta = function (text) {
    process.stdout.write('\x1B[35m' + text + '\x1B[39m');
};

exports.cyan = function (text) {
    process.stdout.write('\x1B[36m' + text + '\x1B[39m');
};

exports.white = function (text) {
    process.stdout.write('\x1B[37m' + text + '\x1B[39m');
};

exports.grey = function (text) {
    process.stdout.write('\x1B[90m' + text + '\x1B[39m');
};