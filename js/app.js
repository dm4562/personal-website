$(document).ready(function() {
  $(function() {
    $(".text-intro").typed({
      strings: [
        "I'm a developer",
        "I have a passion for building",
        "I'm curious about how things work",
        "My name is Dhruv^"
      ],
      typeSpeed: 100,
      startDelay: 500,
      callback: setup()
    });
  });
});

var setup = function() {
  var font = parseInt($(".text").css('font-size'));
  $('ul.flaTimeline').flaTimeline({
    gridColor: "#C6D8D3",
    eventColor: "#000000"
  });
};
