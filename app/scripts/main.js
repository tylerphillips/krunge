$(document).ready(function() {
		$(".fancybox").fancybox();
	});

/* Wait for DOM to be ready */
$(function () {
	// Store original image dimensions
	$('.photoset-item img').each(function () {
		var img = new Image();
		img.src = $(this).attr('src');
		$(this)
      .data('org-width', img.width)
      .data('org-height', img.height)
      .hide()
      .closest('.photoset-item')
      .css({
        "background-image": "url("+img.src+")";
        "background-position" : "center center"
      });
	});

	// Detect resize event
	$(window).resize(function () {
		// Set photoset image size
		$('.photoset-row').each(function () {
			var $pi    = $(this).find('.photoset-item'),
				  cWidth = $(this).parent('.photoset').width();

			// Generate array containing all image aspect ratios
			var ratios = $pi.map(function () {
				return $(this).find('img').data('org-width') / $(this).find('img').data('org-height');
			}).get();

			// Get sum of widths
			var sumRatios = 0,
          minRatio  = Math.min.apply(Math, ratios);
			for (var i = 0; i < $pi.length; i++) {
				sumRatios += ratios[i]/minRatio;
			};

			// Calculate dimensions
			$pi.each(function (i) {
				var hMargins = parseInt($(this).css('margin-left')) + parseInt($(this).css('margin-right')),
            minWidth = cWidth/sumRatios;
				$(this)
					.width(Math.floor(minWidth*(ratios[i]/minRatio) - hMargins)) // Use Math.floor to correct for rounding error
				.height(Math.floor(minWidth/minRatio));
			});
		});
	}).resize();
});

