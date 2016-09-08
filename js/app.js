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
      typeSpeed: 70,
      startDelay: 500,
      callback: setup()
    });
  });

  $('.scroll-button').click(function() {
    var content = $(".banner");
    $('html, body').animate({
      scrollTop: content.offset().top - content.height()
    }, 700);
  });
});

var setup = function() {
  var font = parseInt($(".text").css('font-size'));
  $('ul.flaTimeline').flaTimeline({
    gridColor: "#E63946",
    eventColor: "#C6D8D3",
    borderRadius: "4px"
  });
  setTimeout(function() {
    $('.show-later').slideDown();
  }, 5000);
};
