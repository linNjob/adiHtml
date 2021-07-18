//年份自動更新
 today=new Date();
 y0=today.getFullYear();


$(function() {
	var resize = $(window).width();
	$(window).resize(function() {
		resize = $(window).width();
	});
	function countryList(num) {
		$('.country.region' + num).click(function () {
			if ( resize >= 1024 ){
					$('.country, .region-list').removeClass('active');
					$(this).toggleClass('active');
					$(this).next().toggleClass('active')
			} else if ( resize < 1024 ) {
				if( $(this).hasClass('active') ){
					$(this).removeClass('active');
					$(this).next().removeClass('active');
				} else {
					$('.country, .region-list').removeClass('active');
					$(this).addClass('active');
					$(this).next().addClass('active');
				};
			};
		});
	};
	countryList('01');
	countryList('02');
	countryList('03');
	countryList('04');
	countryList('05');
	countryList('06');
});