jQuery(document).ready(function($) {
	/**
	 * LayerSlider 3
	 */
	autostart = true;
	if (Drupal.settings['exchange']['autostart'] == 0) {
		var autostart = false;
	}
	
	pauseonhover = false;
	if (Drupal.settings['exchange']['pauseonhover'] == 1) {
		var pauseonhover = true;
	}
	
	autoplayvideos = false;
	if (Drupal.settings['exchange']['autoplayvideos'] == 1) {
		var autoplayvideos = true;
	}
	
	$('#slider').layerSlider({
			autoStart               : autostart,
			responsive              : true,
			firstLayer              : 1,
			twoWaySlideshow         : false,
			keybNav                 : true,
			touchNav                : true,
			imgPreload              : true,
			navPrevNext             : true,
			navStartStop            : false,
			navButtons              : false,
			pauseOnHover            : pauseonhover,
			globalBGColor           : 'transparent',
			animateFirstLayer       : true,
			autoPlayVideos          : autoplayvideos,
			autoPauseSlideshow      : 'auto',
			youtubePreview          : 'maxresdefault.jpg',
			slideDirection          : 'right',
			slideDelay              : 4000,
			durationIn              : 1000,
			durationOut             : 1000,
			easingIn                : 'easeInOutQuint',
			easingOut               : 'easeInOutQuint',
			delayIn                 : 0,
			delayOut                : 0
	});
  
	// Show slider controller on hover
	$('#slider-container').hover(
		function() {
			$('.ls-nav-prev, .ls-nav-next', this).fadeIn(180);
		}, 
		function() {
			$('.ls-nav-prev, .ls-nav-next', this).fadeOut(180);
		}
	);
  
	/**
	 * Dropdown
	$('#main-menu li.expanded').hover(
		function () {
			var width = $(window).width();
			if ( width > 1023 ) {
				$(this).addClass("hover");
				$('ul:first', this).slideDown('fast');
			}
		},
		function () {
			var width = $(window).width();
			if ( width > 1023 ) {
				$(this).removeClass("hover");
				$('ul:first',this).slideUp('fast');
			}
		}
	);
	 */

	/**
	 * Indicator for dropdown menus
	$('#main-menu li.expanded').each(function() {
		$(this).children('a').append(' &raquo;');
	});
	 */

	/**
	 * Responsive navigation
	 */
	$('#main-menu .open-menu').click(function(e) {
		e.preventDefault();
		var menu = $(this).parent();
		$('ul.menu:first-child', menu).slideToggle();
	});
	
	/**
	 * Portfolio thumbnails, hover effect
	 */
	$('.portfolio .work-item').hover(
    function () {
      $('.work-entry', this).fadeTo(320, 1);
    },
    function () {
      $('.work-entry', this).fadeTo(320, 0);
    }
	);
});

;(function($) {
	/**
	 * Hide/show the responsive main menu in a case of window resizing
	 */
	$(window).resize(function(){
		var menu = $('#main-menu ul.menu:first-child');
    if ($(window).width() >= 1024 && menu.is(':hidden')) {
      menu.show();

      // Hide submenus
      $('li.expanded ul', menu).hide();
    }

    if ($(window).width() < 1024 && menu.is(':visible')) {
      menu.hide();

      // Show submenus
      $('li.expanded ul', menu).show();
    }
	});


  $(window).bind('load', function() {
    /**
     * Accordion active class
     */
    $('.accordion-group').each(function() {
      if ($('.accordion-body', this).height() != 0) {
        $('.accordion-toggle', this).addClass('active');
      }
    });
    
    /**
     * Sticky footer
     */
    stickyFooter();
     
    $(window)
      .scroll(stickyFooter)
      .resize(stickyFooter);
     
    function stickyFooter() {
      var docHeight = $(document.body).height() - $("#sticky-footer-push").height();
      if(docHeight < $(window).height()){
        var diff = $(window).height() - docHeight;
				/*
        if (!$("#sticky-footer-push").length > 0) {
          $("#main-content").append('<div id="sticky-footer-push"></div>');
        }
        $("#sticky-footer-push").height(diff);
				*/
      }
    }

		var testVar = document.getElementById('left_sidebar').className;
		console.log(testVar);
		/**
		* Full height sidebar
		if($(window).width() >= 1024) {
			//sidebarHeight();
			function sidebarHeight() {
				if ($('#main-content').height() > $('#sidebar').height()) {
					var diff = $('#main-content').height() - $('#sidebar').height();
					$("#sidebar").append('<div id="sidebar-push"></div>');
					$("#sidebar-push").height(diff);
				}
			}
		}
		var main = document.getElementById('main-content');
		var rightColumn = document.getElementById('right_sidebar').firstChild.nextSibling;
		var windowWidth = $(window).width();
		$(window).resize(function(){
				if(windowWidth < 1024 && windowWidth > 768){
					main.className= 'span8';
					rightColumn.className = 'span4';
				}
		});
		*/

		/**
		* Omit sidebar based on window size
			var span3 = $('#sidebar').parent();
			reflow();
			$(window).resize(function(){
				reflow();
			});

			function reflow(){
				if($(window).width() > 1024){
					span3.css('display', 'inline');
				}
				else{
					span3.css('display', 'none');
				}
			}
		*/
		//});
  });
})(jQuery);
