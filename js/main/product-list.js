$(function() {
	//mobile-product-selected-list 商品篩選點擊展開樣式==========================
	$('.product-selected-list > li > a').click(function () {
		$(this).parent().toggleClass('active');
		$(this).next('ul').toggleClass('active');
	});
	$('.product-selected-list > li > ul > li > a').click(function () {
		$(this).parent().toggleClass('active');
	});
	//商品換圖
	var startImg;
	$('.product-img-nav-bar .product-img-nav-list').mouseover(function () {
		startImg = $(this).parents('.product-infor-box').find('.product-img-box img').attr('src');
		var mouseoverImg = $(this).children('img').attr('src');
		$(this).parents('.product-infor-box').find('.product-img-box img').attr('src', mouseoverImg);
		// .attr('src', mouseoverImg);
	});
	$('.product-img-nav-bar .product-img-nav-list').mouseout(function () {
		$(this).parents('.product-infor-box').find('.product-img-box img').attr('src', startImg);
	});
	$('.product-img-nav-bar .product-img-nav-list').click(function () {
		startImg = $(this).parents('.product-infor-box').find('.product-img-box img').attr('src');
		$(this).parent().find('.product-img-nav-list').removeClass('active');
		$(this).addClass('active');
	});
	//商品列表呈現方式=================================
	$('.change-product-list-inventory-box > li').click(function () {
		$('.change-product-list-inventory-box > li').removeClass('active');
		$(this).addClass('active');
		$('.product-list-inventory-box').toggleClass('single');
	});
	//商品篩選功能=====================================
	$('.product-tool-box .filters').click(function () {
		$('.wrap-product-selection').addClass('show');
		$('.product-tool-box, .product-list-inventory-box, .product-list-wrap, .wrap-footer-search, .wrap-footer-copyright').addClass('mobile-filters-none');
	});
	$('.filter-results-btn').click(function () {
		$('.wrap-product-selection').removeClass('show');
		$('.product-tool-box, .product-list-inventory-box, .product-list-wrap, .wrap-footer-search, .wrap-footer-copyright').removeClass('mobile-filters-none');
	});
	// 列表顯示數量====================================
	$('.view-quantity > a').click(function () {
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
	//篩選 product-price
	var html5Slider = document.getElementById('html5-nouislider');

	noUiSlider.create(html5Slider, {
		start: [ 0, 100 ],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});

	var startNumber = document.getElementById('start-number');
	var endNumber = document.getElementById('end-number');

	html5Slider.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];

		if ( !handle ) {
			startNumber.value = value;
		} else {
			endNumber.value = value;
		}
	});


	startNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([this.value, null]);
	});

	endNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});

	$(window).scroll(function () {
		var wTop = $(this).scrollTop();
		var pdtTop = $('.product-tool-fixed').offset().top;
		// console.log(wTop);
		// console.log(pdtTop);
		if( wTop >= pdtTop){
			console.log('remove');
			$('.product-tool-fixed').addClass('mobile-filters-fixed');
		} else if( wTop < pdtTop ) {
			console.log('add');
			$('.product-tool-fixed').removeClass('mobile-filters-fixed');
		}
	})
});

