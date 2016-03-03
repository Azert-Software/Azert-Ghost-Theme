/// <reference path="typings/jquery/jquery.d.ts" />

class LogoFade{

    toggleLogo(logo:JQuery,navbar:JQuery,header:JQuery){
      var navHeight:number = $(navbar).outerHeight();
      this.toggle(logo,navbar,header);
      
      $(window).scroll(function(s){
        this.toggle(logo,navbar,header);
      });
    }

    private toggle(logo:JQuery,navbar:JQuery,header:JQuery)){
      var headerTop:number = ($(window).scrollTop() - header.outerHeight()) + navHeight;

      if(headerTop <= navHeight)
          $(logo).fadeOut("slow");
        else
          $(logo).fadeIn("slow");
    }
}
