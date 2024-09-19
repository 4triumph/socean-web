$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var sHight = 300;
    if ($(window).width() < 1000) {
        sHight = 100;
    }


    $('.animated').each(function () {
        var thisPos = $(this).offset().top;
        if (thisPos <= (scrollPos + windowHeight - sHight)) {
            $(this).addClass('fadeIn');


            if ($(this).attr('id') == 'animate_07') {
                $('#btn_first_next').addClass('fadeIn');
            }

        }
    });


});


$(function () {

    $('#animate_01').addClass('fadeIn');
    $('#animate_01').css('height', )
    $('#animate_01').click(function () {
        $('#animate_01').addClass('fadeIn');

    })
    $('.slide:eq(0)').show();

    $(window).resize(function () {
        var newHeight = $(window).height();
        $('.slide').css('min-height', newHeight + 'px');
        newHeight = $(window).height() - 50;
    });
    $(window).trigger('resize');





    // next button listener
    $('.next').click(function () {
        var $target = $(this).closest('.slide').next('.slide');
        $target.show();
        $(window).scrollTo($target, 800);
    })


    var clickCount = 0; // 初始化点击次数为0

    $('.slide .button:eq(1)').click(function () {
        if (clickCount > 0) {
            if ($('select[name=age]').val() == '0') {
                alert('請選擇年齡');
                return false;
            }

            // save name if entered
            if ($('.slide:eq(1) select').val()) {

                $('.slide:eq(2)').show();
                var nextSlide = $('.slide:eq(2)');
                $(window).scrollTo($(nextSlide), 800);
            }
        }
        clickCount++;
    });



});





function redirectToExternalLink() {
    window.location.href = "http://www.wocean.xyz/";
}
function save_data() {
    // 模拟后端处理
    // var age = document.querySelector('select[name=age]').value;
    var q1 = document.querySelector('select[name=q1]').value;
    var q2 = document.querySelector('select[name=q2]').value;
    var q3 = document.querySelector('select[name=q3]').value;
    var q4 = document.querySelector('select[name=q4]').value;
    var q5 = document.querySelector('select[name=q5]').value;
    var q6 = document.querySelector('select[name=q6]').value;
    var q7 = document.querySelector('select[name=q7]').value;
    var q8 = document.querySelector('select[name=q8]').value;


    // 根据每个变量的值的范围来修改 <td> 元素的内容
    if (q1 == 0) {
        document.getElementById('res_q1_adv').innerHTML = '你的选择真令人钦佩！每个不使用塑料杯的日子都是对环境的一次胜利。你的努力值得赞赏！';
    } else if (q1 > 0 && q1 <= 5) {
        document.getElementById('res_q1_adv').innerHTML = '<span class="Red">减量 </span>尝试使用可重复利用的替代品。';
    } else {
        document.getElementById('res_q1_adv').innerHTML = '<span class="Red">替用 </span>尝试使用可降解的或者可回收的饮料杯！';
    }

    if (q2 == 0) {
        document.getElementById('res_q2_adv').innerHTML = '这是很好的习惯！您正在减少塑料垃圾的产生，保护环境。';
    } else if (q1 > 0 && q1 <= 5) {
        document.getElementById('res_q2_adv').innerHTML = '<span class="Red">减少 </span>自备水壶，少买瓶装水。';

    } else {
        document.getElementById('res_q2_adv').innerHTML = '<span class="Red">替用和回收 </span>尝试使用可降解的或者可回收的饮料杯！记得回收宝特瓶。';
    }

    if (q3 == 0) {
        document.getElementById('res_q3_adv').innerHTML = '你的环保意识令人赞叹！你选择不使用塑料吸管，为我们展示了可持续生活的重要性。继续向前，你是环保行动的一面旗帜';
    } else if (q1 > 0 && q1 <= 5) {
        document.getElementById('res_q3_adv').innerHTML = '<span class="Red">替用 </span>尝试使用可重复使用的金属或硅胶吸管，以减少对塑料的依赖';
    } else {
        document.getElementById('res_q3_adv').innerHTML = '<span class="Red">拒用 </span>能不用吸管就不用！';
    }

    if (q4 == 0) {
        document.getElementById('res_q4_adv').innerHTML = '鼓励身边的朋友和家人也加入到减塑行动中，一起分享减塑的好处，共同努力保护地球。';
    } else if (q1 > 0 && q1 <= 5) {
        document.getElementById('res_q4_adv').innerHTML = '<span class="Red">減量 </span>尽量少使用塑料盒，可自备餐具盛装食物。';
    } else {
        document.getElementById('res_q4_adv').innerHTML = '<span class="Red">替用和回收 </span>选择可降解的生物塑料或可回收的塑料制品，';
    }

    if (q5 == 0) {
        document.getElementById('res_q5_adv').innerHTML = '非常棒！你意识到减少塑料使用的重要性，并且在行动中付诸实践。你的努力对保护环境做出了积极的贡献。';
    } else if (q1 > 0 && q1 <= 5) {
        document.getElementById('res_q5_adv').innerHTML = '<span class="Red">減量 </span>尽量少用塑料袋装食物，还可减少食物接触到塑化剂。';
    } else {
        document.getElementById('res_q5_adv').innerHTML = '<span class="Red">替用 </span>尝试自备食物容器，可重复使用可保护健康的纸杯。';
    }

    if (q6 == 0) {
        document.getElementById('res_q6_adv').innerHTML = '你的行为是其他人的榜样！通过减少使用一次性餐具，你向他人传递了环保的重要信息，希望更多人能够效仿你的行动。';
    } else {
        document.getElementById('res_q6_adv').innerHTML = '<span class="Red">拒用 </span>自备环保餐具，减少接触到塑化剂。';
    }


    if (q7 == 0) {
        document.getElementById('res_q7_adv').innerHTML = '即使只是减少一次性购物袋的使用，也是对环境的一次保护！';
    } else {
        document.getElementById('res_q7_adv').innerHTML = '<span class="Red">再用 </span>建议塑料袋回收再利用，购物时自备购物袋或环保两用袋！';
    }

    if (q8 == 0) {
        document.getElementById('res_q8_adv').innerHTML = '你的每一个减塑举动都是对地球的一份爱！你的决心和努力值得崇敬，继续坚持，你正在改变世界！';
    } else {
        document.getElementById('res_q8_adv').innerHTML = '<span class="Red">拒用 </span>建议尽量少购买过度包装的食品！';
    }

    var score = 0;
    var level_score = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8);

    // 根据得分计算级别
    var level = '';
    if (level_score > 37) {
        level = '减塑高手';
    } else if (level_score >= 20 && level_score <= 37) {
        level = '减塑新手';
    } else {
        level = '吃塑狂魔';
    }

    // 更新页面内容
    document.getElementById('res_title_01').style.display = 'none';
    document.getElementById('res_title_02').style.display = 'none';
    document.getElementById('res_title_03').style.display = 'none';

    document.getElementById('res_q1_sum').textContent = parseInt(q1) * 52;
    document.getElementById('res_q2_sum').textContent = parseInt(q2) * 52;
    document.getElementById('res_q3_sum').textContent = parseInt(q3) * 52;
    document.getElementById('res_q4_sum').textContent = parseInt(q4) * 52;
    document.getElementById('res_q5_sum').textContent = parseInt(q5) * 52;
    document.getElementById('res_q6_sum').textContent = parseInt(q6) * 52;
    document.getElementById('res_q7_sum').textContent = parseInt(q7) * 52;
    document.getElementById('res_q8_sum').textContent = parseInt(q8) * 52;

    if (level_score == 0) {
        document.getElementById('res_score_td').textContent = "\n" + "您做得很好，请继续保持！";
    } else {
        document.getElementById('res_score_td').textContent = "您一年使用的塑料总量为 " + level_score * 52 + " 件";
    }

    // 显示结果
    document.getElementById('res_05').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('res_05').offsetTop,
        behavior: 'smooth'
    });
}