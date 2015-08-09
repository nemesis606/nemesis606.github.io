$(document).ready(function() {
    var mobile_button = function (e)
    {
        this.objectQuestion = e;

        this.mobile_action = function()
        {
            this.objectQuestion.preventDefault();
            var target = $(this.objectQuestion['currentTarget']).data("target");
            $('body').addClass('activate-canvas').append("<div class='shadow-canvas'></div>");
            if ($(target).hasClass("right-canvas")) {
                var referenceCanvas = 'right';
                $(target).css("right", "0");
            } else if ($(target).hasClass("left-canvas")) {
                var referenceCanvas = 'left';
                $(target).css("left", "0");
            }
            $(target + " .mobile-close-menu ").on("click", function () {
                $(this).parent().css(referenceCanvas, "-100%");
                $('body').removeClass('activate-canvas');
                $(".shadow-canvas").remove();
            });
            $(".shadow-canvas").click(function () {
                $(target + " .mobile-close-menu ").click();
            });
        }
    }

    $(".mobile-button").click(function (e) {
        var event = new mobile_button(e);
        event.mobile_action();
    });
});




