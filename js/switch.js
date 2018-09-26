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

