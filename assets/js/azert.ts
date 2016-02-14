/// <reference path="typings/jquery/jquery.d.ts" />

$(document).ready(function(){
  $("#currDate").text(new Date().getFullYear());
  $(".button-collapse").sideNav();
});
