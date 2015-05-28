/**
 * Created by jf on 09.05.15.
 */

function _extends(_sub, _super) {
    var __ = function(){};
    __.prototype = _super.prototype;
    _sub.prototype = new __();
    _sub.prototype.constructor = _sub;
}


/**
 * Base class.
 *
 * @class
 */
function Audio() {
}

/**
 *
 */
Audio.prototype.log = function() {
    console.log("base class method called");
};

/**
 * Extended class.
 *
 * @class
 * @extends {Audio}
 *
 */

var RtcAudio = (function(_super){

    _extends(RtcAudio, _super);

    function RtcAudio() {
    }

    RtcAudio.prototype.log = function() {
        console.log("extended class method called");
    };


    return RtcAudio;
}(Audio));

// Instruction order is important here.
// extends shall be called immediately called after constructor of the extended class but before
// writing down methods that shall be overwritten.

/**
 *
 */

var au = new RtcAudio();
au.log();
console.log(RtcAudio.prototype);
