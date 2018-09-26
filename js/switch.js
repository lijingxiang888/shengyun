$(function () {
    var $serverMenu = $('#server-menu');
    var $newsMenu = $('#news-menu');

    $serverMenu.click(function (e) {
        var $serverNum = $(e.target.parentNode).index();
        window.location.href = './server.html?serverNum=' + $serverNum;
    });

    $newsMenu.click(function (e) {
        var $newsNum = $(e.target.parentNode).index();
        window.location.href = './news.html?newsNum=' + $newsNum;
    })
});
$(function () {
    var $allSa = $('#serverTabs a');
    var $allNa = $('#newsTabs a');

    String.prototype.myQueryURLParameter = function myQueryURLParameter() {
        var obj = {};
        this.replace(/([^?&=#]+)=([^?&=#]+)/g, function () {
            obj[arguments[1]] = arguments[2];
        });
        this.replace(/#([^?=&#]+)/g, function () {
            obj['HASH'] = arguments[1];
        });
        return obj;
    };
    var url = window.location.href,
        serverObj = url.myQueryURLParameter(),
        serverNum = Number(serverObj['serverNum']);
        newsNum = Number(serverObj['newsNum']);
        console.log(serverNum,newsNum);

    //console.log($('#serverTabs a:eq(loc)')); //没得到，所以用each循环
    if (serverNum){
        $allSa.each(function (index,item) { //url里有serverNum参数，循环所有a标签，找到索引对应的那一项执行tab方法
            if (index === serverNum){
                $(item).tab('show');
            }
        });
    }

    if (newsNum){
        $allNa.each(function (index,item) {
            if (index === newsNum){
                $(item).tab('show');
            }
        })
    }
});