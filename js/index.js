$(function () {
    /*tab插件的初始化*/
    $('#myTab a:first').tab('show');
    $('#newsTab a:first').tab('show');

    /*数字累加动画*/
    var $winH = $(window).height(), //浏览器一屏高度
        $top = $('.team-show').offset().top,
        $height = $('.team-show').height();

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

    //获取最新动态和行业资讯
    var latesUrl = '../data/latestnews.json',
        bussiUrl = '../data/businessnews.json';

    function getNews(url) {
        $.ajax({
            url:url,
            type:'get',
            async:false,
            dataType:'json',
            success:bindHTML
        });

        function bindHTML(data) {
            if (/latestnews/.test(url)){
                var mainHTML = $('#mainTemplate').html(); //获取模板的html结构
                var result = ejs.render(mainHTML,{mainData:data}); //向模板里填数据
                $('#latest').html(result); //现在的result又有结构又有数据

                $('#latest li').click(function () { //li存在之后绑定点击事件
                    var pageNum = $(this).index();
                    window.location.href = './detail.html?pick=0&pagenum=' + pageNum
                })
            }else {
                var mainHTML = $('#mainTemplate2').html();
                var result = ejs.render(mainHTML,{mainData:data});
                $('#business').html(result);

                $('#business li').click(function () {
                    var pageNum = $(this).index();
                    window.location.href = './detail.html?pick=1&pagenum=' + pageNum
                })
            }
        }
    }
    getNews(latesUrl);
    getNews(bussiUrl);
});
