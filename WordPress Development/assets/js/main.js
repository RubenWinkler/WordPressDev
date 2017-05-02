// to use this parallex effect anywhere else just add:
// data-type="background" data-speed="5"
// as attributes to the element and make sure that the images' css is "fixed"
// (also: see .hero section)

$(function() {

  // cache the window object
  var $window = $(window);

  // parallax background effect
  $('section[data-type="background"]').each(function() {

    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {

      // scroll the background at var speed
      // the yPos is a negative value because we are scrolling it up
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // put together our final background position
      var coords = '50% ' + yPos + 'px';

      // move the background
      $bgobj.css({ backgroundPosition: coords });

    }); // end window scroll

  });

});
