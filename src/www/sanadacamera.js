var exec = require('cordova/exec');

/**
 * call Sanada Camera plugin
 * @param successCallback
 * @param errorCallback
 */
var sanadaCamera = {
    start: function(successCallback, errorCallback) {
        var action = 'start';
        exec(successCallback, errorCallback, "CameraPlugin", action, []);
    }
};

module.exports = sanadaCamera;
