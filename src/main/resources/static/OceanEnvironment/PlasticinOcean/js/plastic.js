$(function(){
    $menuWrap = $('.menu-wrap');
    $menu = $('.menu');
    $menuItem = $('.menu').find('.item');
    $menuItemInner = $menuItem.find('.item-inner');
    menuLng = $menuItem.length;
    itemDeg = 360 / $menuItem.length;
    $menuItem.each(function(r){
        $(this).css('transform', 'rotate(' + ( itemDeg / 2 - itemDeg * r ) + 'deg) skew(' + ( - 90 + itemDeg ) + 'deg)');
        $(this).children('.item-inner').css('transform', 'skew(' + ( 90 - itemDeg ) + 'deg)');
        $(this).find('.txt').css('transform', 'rotate(' + ( -itemDeg / 2 ) + 'deg)');
    });

    var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    var menuRotateDeg = 0;
    var menuRotate = function(rt){
        $menuItem.removeClass('on');
        $menu.css('transform', 'rotate(' + rt + 'deg)');
        $menuItem.eq( Math.ceil( rt % 360 / itemDeg ) ).addClass('on');
    };
    $menuWrap.on(mousewheelevent, function(e){
        e.preventDefault();
        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
        if (delta < 0){
            menuRotateDeg = menuRotateDeg + itemDeg;
        } else {
            menuRotateDeg = menuRotateDeg - itemDeg;
        }
        menuRotate(menuRotateDeg);
    });
    menuRotate(0);

    $menuItemInner.on('click', function(){
        var hash = $(this).attr('href').split('#')[1],
            position = $('#' + hash).offset().top;
        $('body,html').stop().animate({
            'scrollTop': position
        }, {
            'duration': 500,
            'easing': 'swing',
            'complete': function() {
                location.hash = hash;
            }
        });
        $(window).scroll();
        return false;
    });
    $('.menu-wrap .menu a').on('click', function(e) {
        e.preventDefault(); // 防止默认的链接行为

        var target = $(this).attr('href');
        var $target = $(target);

        if ($target.length) { // 检查目标元素是否存在
            var targetOffset = $target.offset().top; // 获取目标元素的顶部偏移量
            var windowHeight = $(window).height(); // 获取窗口的高度

            // 计算滚动位置，使目标元素的中间位置位于窗口垂直居中位置
            var scrollTo = targetOffset - (windowHeight - $target.outerHeight(true)) / 2 - 270;

            // 使用动画效果滚动到目标位置
            $('html, body').animate({
                scrollTop: scrollTo
            }, 500);
        }
    });


    var secTopArr = [];
    $(window).on('resize load', function(){
        $('.sec').each(function(r){
            secTopArr[r] = Array( $(this).offset().top, $(this).offset().top + $(this).height() );
        });
        wh = $(window).height();
    });
    $(window).on('scroll', function(){
        wt = $(this).scrollTop();
        var scTo;
        for (var i = 0; i < secTopArr.length; i++) {
            if( secTopArr[i][0] >= wt && secTopArr[i][0] < wt + wh){
                scTo = i;
            } else if( secTopArr[i][0] <= wt && secTopArr[i][1] >= wt + wh){
                scTo = i;
            }
        }
        menuRotate(scTo*itemDeg);
    }).resize();
});