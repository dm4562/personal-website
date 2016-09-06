$(document).ready(function() {
  $(function() {
    $(".text").typed({
      strings: [
        "I'm a developer",
        "I have a passion for building",
        "I'm curious about how things work",
        "My name is Dhruv^"
      ],
      typeSpeed: 100,
      startDelay: 500,
      resetCallback: setTimeout(setup, 23000)
    });
  });
});

var setup = function() {
  alert("Boom");
}
