goog.provide('modernPaste.universal.CommonController');


/**
 * This controller contains utility functions common to all controllers.
 *
 * @constructor
 */
modernPaste.universal.CommonController = function() {};

/**
 * Convert a UNIX timestamp to a relative time, e.g. "3 hours ago."
 * This function will return units of days, hours, minutes, and seconds.
 *
 * @param unixTimestampString Timestamp as a string
 * @returns {string} A string representing a relative time.
 */
modernPaste.universal.CommonController.unixTimestampToRelativeTime = function(unixTimestampString) {
    var timestampDate = new Date(parseInt(unixTimestampString, 10)*1000);
    var currentDate = new Date();
    var deltaDate = currentDate - timestampDate;
    var deltaDays = deltaDate/(1000*60*60*24);
    var deltaHours = deltaDays*24;
    var deltaMinutes = deltaHours*60;
    var deltaSeconds = deltaMinutes*60;
    if (deltaDays >= 1) {
        return Math.round(deltaDays) + ' day' + (Math.round(deltaDays) == 1 ? '' : 's') + ' ago';
    } else if (deltaHours >= 1) {
        return Math.round(deltaHours) + ' hour' + (Math.round(deltaHours) == 1 ? '' : 's') + ' ago';
    } else if (deltaMinutes >= 1) {
        return Math.round(deltaMinutes) + ' minute' + (Math.round(deltaMinutes) == 1 ? '' : 's') + ' ago';
    } else {
        return Math.round(deltaSeconds) + ' second' + (Math.round(deltaSeconds) == 1 ? '' : 's') + ' ago';
    }
};

/**
 * Truncate the input text to to the desired character limit, adding ellipsis if it exceeds the limit.
 *
 * @param text String to possibly truncate
 * @param characterLimit Integer limit for the string length
 * @return {string} The input string, possibly truncated with ellipsis at the end
 */
modernPaste.universal.CommonController.truncateText = function(text, characterLimit) {
    return text.length > characterLimit ? text.substring(0, characterLimit) + '...' : text;
};


$(document).ready(function() {
    new modernPaste.universal.CommonController();
});
