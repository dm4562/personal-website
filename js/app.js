$(document).ready(function() {
  $(function() {
    $(".text-intro").typed({
      strings: [
        "a developer",
        "a builder",
        "a Linux enthusiast",
        "a Yellow Jacket^"
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
