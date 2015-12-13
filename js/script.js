// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Only displays page when resources are loaded (using a cover div)
$(window).on('load', function() {
   $("#cover").fadeOut(2000);
   $("#spinner").fadeOut(1000);
});
