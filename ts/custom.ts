/// <reference path="../typings/index.d.ts"/>

interface JQuery {
  particleground: Function;
}

$(document).ready(function() {
  $('.particle').particleground();
  // $('.intro').css({
  //   'margin-top': -($('.intro').height() / 2)
  // });
});
