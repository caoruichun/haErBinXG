$(function(){$(".Select div").click(function(){var e=$(this).parent().index();$(".Select div").find("i").css({background:'url("./images/list/jia.png") top/100% auto no-repeat'}),$(".Select div").parent().children("li").slideUp(),$(this).find("i").css({background:'url("./images/list/jian.png") top/100% auto no-repeat'}),$(this).parent().children("li").slideDown(),$(".showNav div").eq(e).addClass("oneShow").siblings().removeClass("oneShow")}),$(".Select").on("click"," ul>li",function(){var e=$(this).parent().index(),t=$(this).index()-1;$(".showNav ul").children("li").removeClass("oneShow"),$(".showNav ul").eq(e).children("li").eq(t).addClass("oneShow")})});