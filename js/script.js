/**
 * Created by nemesis on 09/08/15.
 */

$(document).ready(function(){
    $("mz-link").easyAudioEffects(
        {
            ogg : "assets/sounds/pi.ogg",
            mp3 : "assets/sounds/pi.mp3",
            eventType : "hover", // or "click"
            playType : "oneShotPolyphonic"
        }
    );
});