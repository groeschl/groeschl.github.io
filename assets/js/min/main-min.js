$(document).ready(function(){var t=$("#pull");menu=$("nav ul"),menuHeight=menu.height(),$(t).on("click",function(t){t.preventDefault(),menu.slideToggle()}),$(window).resize(function(){var t=$(window).width();t>320&&menu.is(":hidden")&&menu.removeAttr("style")})}),$(document).ready(function(){$("#blackbox").click(function(){$("html, body").animate({scrollTop:$("#home").offset().top},3e3)})}),$(document).ready(function(){$("#backtotop").click(function(){$("html, body").animate({scrollTop:$(".clearfix").offset().top},1e3)})}),$(document).ready(function(){$("#sliderb1").click(function(){$("html, body").animate({scrollTop:$("#home").offset().top},1e3)}),$("#sliderb2").click(function(){$("html, body").animate({scrollTop:$("#ppl").offset().top},1e3)}),$("#sliderb3").click(function(){$("html, body").animate({scrollTop:$("#projectb").offset().top},1e3)}),$("#sliderb4").click(function(){$("html, body").animate({scrollTop:$(".pagefooter").offset().top},1e3)})}),$(document).ready(function(){$(".sb1").hover(function(){$(this).attr("src","assets/icons/radio_ch.png")},function(){$(this).attr("src","assets/icons/radio_unc.png")}),$(".sb2").hover(function(){$(this).attr("src","assets/icons/radio_ch.png")},function(){$(this).attr("src","assets/icons/radio_unc.png")}),$(".sb3").hover(function(){$(this).attr("src","assets/icons/radio_ch.png")},function(){$(this).attr("src","assets/icons/radio_unc.png")}),$(".sb4").hover(function(){$(this).attr("src","assets/icons/radio_ch.png")},function(){$(this).attr("src","assets/icons/radio_unc.png")})});