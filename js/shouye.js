$(function() {
    $(".ybaaner-l-h li").click(function() {
        $(this).addClass('ybaerdangqian').siblings().removeClass('ybaerdangqian');
        /*alert($(this).index());*/
        $(".ybaaner-l-b li").eq($(this).index()).show().siblings().hide();
    });
    //鎴愬姛妗堝垪
    $(".ychenggong-b .ychenggong-b-z li").mouseenter(function(event) {
        $(this).children('.ychenggong-b-z-n').animate({top:"0"}, 300);
        $(this).children('.ychenggong-b-z-tjj').css('display',"none");
    }).mouseleave(function(event) {
        $(this).children('.ychenggong-b-z-n').animate({top:"222"}, 300);
        $(this).children('.ychenggong-b-z-tjj').css('display',"block");
    });
    //鍥炲埌椤堕儴
    $(window).scroll(function() {
            var cw = $(window).scrollTop();
            if (cw > 0) {
                $(".huidao").show(300)
            } else {
                $(".huidao").hide(300)
            }
        })
        $(".huidao").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600)
        })
});