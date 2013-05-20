(function ($) {
	$(document).ready(function() {
    /**
     * Shortcode: slideshow
     *
     * Uses jQuery cycle
     */
    $('.image-slideshow').each(function(){
      var parent = $(this);
      var timeout = $('.slides', this).data('timeout');
      var fx = $('.slides', this).data('fx');
      $('.slides', this).cycle({
        fx: fx,
        speed: 300,
        pause: 1,
        timeout: timeout,
        next: $('.next', parent),
        prev: $('.prev', parent)
      });    
    });

    /**
     * Shortcode: Google Maps
     */
    $('address.googlemaps').each(function() {
      var height = $(this).data('height');
      var width = $(this).data('width');
      var embed = "<iframe width='" + width + "' height='" + height + "' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent($(this).text()) +"&amp;output=embed'></iframe>";
      $(this).html(embed);
    });
	});
})(jQuery);