$(function () {
    /*tab插件的初始化*/
    $('#myTab a:first').tab('show');
    $('#newsTab a:first').tab('show');

    /*数字累加动画*/
    var $winH = $(window).height(), //浏览器一屏高度
        $top = $('.team-show').offset().top,
        $height = $('.team-show').height();
    console.log($winH);

    function myshow() {
        var $sTop = $(window).scrollTop(); //滚动条实施滚出去的距离
        if ($('.num1').attr("flag")) return false; //已经加载了就不重复加载

        if ($winH + $sTop >= $top + $height) {
            /*计数器插件的初始化*/
            $('.num1').countTo();
            $('.num2').countTo();
            $('.num3').countTo();
            $('.num4').countTo();
            //防止滚动条滚动重复加载，所以加一个标识
            $('.num1').attr("flag", true)
        }
    }
    myshow();
    $(window).scroll(myshow);
});
