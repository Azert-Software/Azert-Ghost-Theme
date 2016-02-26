/// <reference path="typings/jquery/jquery.d.ts" />

class LogoFade{

    toggleLogo(logo:JQuery,navbar:JQuery,header:JQuery){
      var navHeight:number = $(navbar).outerHeight();
      $(window).scroll(function(s){
        var headerTop:number = ($(window).scrollTop() - header.outerHeight()) + navHeight;
        
        if(headerTop <= navHeight)
            $(logo).fadeOut("slow");
          else
            $(logo).fadeIn("slow");
      });
    }
}
