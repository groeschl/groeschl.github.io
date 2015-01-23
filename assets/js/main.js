$(document).ready(function() 
{
    var pull = $('#pull');
    menu     = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function(a) 
    {
        a.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function()
    {
    var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) 
        {
            menu.removeAttr('style');
        }
    });
});

//ScrollToHome
$(document).ready(function() 
{
    $("#blackbox").click(function() 
    {
    $('html, body').animate(
    {
        scrollTop: $("#home").offset().top
    }, 3000);
    })

});
//ScrollToHome

//ScrollToTop
$(document).ready(function() 
{
    $("#backtotop").click(function() 
    {
    $('html, body').animate(
    {
        scrollTop: $('.clearfix').offset().top
    }, 1000);
    })

});
//ScrollToTop

//Slider
$(document).ready(function() 
{
    //Home
    $("#sliderb1").click(function() 
    {
    $('html, body').animate(
    {
        scrollTop: $("#home").offset().top
    }, 1000);
    })

    //People
    $("#sliderb2").click(function() 
    {
    $('html, body').animate(
    {
        scrollTop: $("#ppl").offset().top
    }, 1000);
    })

    //Projects
    $("#sliderb3").click(function() 
    {
    $('html, body').animate(
    {
        scrollTop: $("#projectb").offset().top
    }, 1000);
    })

    //About
    $("#sliderb4").click(function() 
    {
    $('html, body').animate(
    {
        scrollTop: $(".pagefooter").offset().top
    }, 1000);
    })
});
//Slider

/*Hovers*/
$(document).ready(function()
{
  $(".sb1").hover(function() {
    $(this).attr("src","assets/icons/radio_ch.png");
      }, function() {
    $(this).attr("src","assets/icons/radio_unc.png");
  });
  $(".sb2").hover(function() {
    $(this).attr("src","assets/icons/radio_ch.png");
      }, function() {
    $(this).attr("src","assets/icons/radio_unc.png");
  });
  $(".sb3").hover(function() {
    $(this).attr("src","assets/icons/radio_ch.png");
      }, function() {
    $(this).attr("src","assets/icons/radio_unc.png");
  });
  $(".sb4").hover(function() {
    $(this).attr("src","assets/icons/radio_ch.png");
      }, function() {
    $(this).attr("src","assets/icons/radio_unc.png");
  });
});
/*Hover*/



