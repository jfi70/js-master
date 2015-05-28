/**
 * Created by jf on 09.05.15.
 */

class TsAudio {

    log() {
        console.log("TsAudio log method");
    }
}

class TsRtcAudio extends TsAudio{
    log() {
        console.log("TsRtcAudio log method");
    }
}


var au = new TsRtcAudio();
au.log();