//-----news-filter
$(document).ready(function(){
    $("#btn-All").click(function(){
        $('.masonry>div').fadeIn();
    });
    $("#btn-Oceans").click(function(){
        $('.masonry>div').hide();
        $(".masonry>#Oceans").fadeIn();
    });
    $("#btn-Water").click(function(){
        $('.masonry>div').hide();
        $(".masonry>#Water").fadeIn();
    });
    $("#btn-Plastic").click(function(){
        $('.masonry>div').hide();
        $(".masonry>#Plastic").fadeIn();
    });
});


//-----goTop

//<![CDATA[
(function () {
    $("body").append("<img id='goTopButton' style='display: none; z-index: 5; cursor: pointer;max-width:35px;' title='goTop'/>");
    var img = "OceanEnvironment/PollutionMenu/img-btn/arrow-up.png",
        locatioin = 5/6, // height
        right = 10, // right padding
        opacity = 0.4,
        speed = 500,
        $button = $("#goTopButton"),
        $body = $(document),
        $win = $(window);
    $button.attr("src", img);
    $button.on({
        mouseover: function() {$button.css("opacity", 1);},
        mouseout: function() {$button.css("opacity", opacity);},
        click: function() {$("html, body").animate({scrollTop: 0}, speed);}
    });
    window.goTopMove = function () {
        var scrollH = $body.scrollTop(),
            winH = $win.height(),
            css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
        if(scrollH > 20) {
            $button.css(css);
            $button.fadeIn("slow");
        } else {
            $button.fadeOut("slow");
        }
    };
    $win.on({
        scroll: function() {goTopMove();},
        resize: function() {goTopMove();}
    });
} )();
//]]>

//---------notNews_hide
$(document).ready(function(){
    var getDirectory=location.pathname;
    getDirectory = getDirectory.substring(0, Math.max(getDirectory.lastIndexOf("/"), getDirectory.lastIndexOf("\\")));
    if(getDirectory=="/en/article"){ $("#notNews_hide").hide(); }
    else if(getDirectory=="/cn/article"){ $("#notNews_hide").hide(); }
    else if(getDirectory=="/sp/article"){ $("#notNews_hide").hide(); }
    else if(getDirectory=="/kr/article"){ $("#notNews_hide").hide(); }
    else if(getDirectory=="/vt/article"){ $("#notNews_hide").hide(); }
    else{ return false; }
});
