/**
 * Created by jf on 09.05.15.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TsAudio = (function () {
    function TsAudio() {
    }
    TsAudio.prototype.log = function () {
        console.log("TsAudio log method");
    };
    return TsAudio;
})();
var TsRtcAudio = (function (_super) {
    __extends(TsRtcAudio, _super);
    function TsRtcAudio() {
        _super.apply(this, arguments);
    }
    TsRtcAudio.prototype.log = function () {
        console.log("TsRtcAudio log method");
    };
    return TsRtcAudio;
})(TsAudio);
var au = new TsRtcAudio();
au.log();
//# sourceMappingURL=oo-ts-extension.js.map