$(document).ready(function() {
  $(function() {
    $(".text-intro").typed({
      strings: [
        "I'm a developer",
        "I have a passion for building",
        "I'm curious about how things work",
        "My name is Dhruv^"
      ],
      contentType: 'text',
      typeSpeed: 100,
      startDelay: 500,
      callback: setup()
    });
  });
});

var setup = function() {
  var font = parseInt($(".text").css('font-size'));
  $('ul.flaTimeline').flaTimeline();
  // console.log(font, font * 1.3);
  font = font * 1.3;
  // console.log("2", font);
  // $(".text").animate({
  //   fontSize: font + 'px'
  // }, {
  //   duration: 500,
  //   queue: false
  // });
  // $(".typed-cursor").animate({
  //   fontSize: font + 'px'
  // }, {
  //   duration: 500,
  //   queue: false
  // });
  // $(".navbar").slideDown("slow");
};
