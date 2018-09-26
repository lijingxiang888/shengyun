$(function () {
    //出现返回顶部按钮
    function back() {
        var winH = $(window).height();
        var winTop = $(window).scrollTop();

        if(winTop > winH){
            $('.back').fadeIn();
            $('.qq').fadeIn();
        }else {
            $('.back').fadeOut();
            $('.qq').fadeOut();
        }
    }
    back();
    $(window).scroll(back);

    //返回顶部点击事件
    $('.back').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});