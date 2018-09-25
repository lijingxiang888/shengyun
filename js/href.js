$(function () {
    $(document).on("click",".dropdown-toggle",function(){

        if( $(window).width() > 767 ){//在手机端浏览的时候，我们希望点击菜单时不跳转，而是bootstrap默认的行为（出现下拉菜单）
            //点击菜单选项时，如果当前选项具有“href”属性，那么点击它时页面跳转至href属性所链接的页面。
            if($(this).attr('href')) window.location = $(this).attr('href');
        }
    });
});

//让一级菜单恢复链接实现点击，把bootstrap.js其中的click.bs.dropdown.data-api事件关闭就好
// $(document).ready(function(){
//     $(document).off('click.bs.dropdown.data-api');
// });