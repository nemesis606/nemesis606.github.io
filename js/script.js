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

    $(".mz-profile-image").easyAudioEffects(
        {
            ogg: "assets/sounds/chime.ogg",
            mp3: "assets/sounds/chime.mp3",
            eventType: "hover", // or "click"
            playType: "oneShotPolyphonic"
        }
    );

    $(".mz-skills-box").ready(function(e){
        var effect = $(".mz-skills-box").attr("data-class");
        console.log(effect);
    });
});