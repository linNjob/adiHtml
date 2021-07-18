$(function() {
	//mobile-product-selected-list 點擊展開樣式==========================
	$('.product-selected-list > li > a').click(function () {
		$(this).parent().toggleClass('active');
		$(this).next('ul').toggleClass('active');
	})
	$('.product-selected-list > li > ul > li > a').click(function () {
		$(this).parent().toggleClass('active');
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
	//商品留言矛點
	$('.spear-reviews-tag').click(function () {
		$("body").animate({ scrollTop: ($('#reviews-tag').offset().top) - 60 } , 600);
	});
	// 產品顏色選擇
	$('.product-color-photo-box .product-color-pchoto-block').click(function () {
		$('.product-color-photo-box .product-color-pchoto-block').removeClass('active');
		$(this).addClass('active');
	});
	//留言板-下拉選單
	$('.star-sorting-options').click(function () {
		$('.star-rating-list').toggleClass('active');
	});
	$('.star-rating-list a').click(function () {
		$(this).toggleClass('active');
	});
	//留言板-排序
	$('.sort-box ul a').click(function () {
		$('.sort-box ul a').removeClass('active');
		$(this).toggleClass('active');
	});
	//留言板-原始留言訊息
	$('.missage-user-name').click(function () {
		$(this).next('.missage-data-infor').toggleClass('active');
	});
	$('.reply-btn').click(function () {
		$('.user-replay-infor').toggleClass('active');
	});
	//留言板focus底線狀態
	$('.focus-bottom-black-line').focusin( function () {
		$(this).parent().addClass('active');
	});
	$('.focus-bottom-black-line').focusout( function () {
		$(this).parent().removeClass('active');
	});
	// 尺寸樣式
	// $('.sorting-options select').click(function () {
	// 	$(this).addClass('active');
	// 	// if( $(this).fouus() ){
	// 	// 	$(this).toggleClass('active');
	// 	// } else if ( $(this).change()){
	// 	// 	$(this).removeClass('active');
	// 	// }

	// });
	// $('.sorting-options select').change(function () {
	// 	$(this).removeClass('active');
	// })
	// $('.sorting-options select')
	// 	.focus(function () {
	// 		$(this).addClass('active');
	// 	})
	// 	.focusout(function () {
	// 		$(this).removeClass('active');
	// 	})
	// 	.change(function () {
	// 		$(this).removeClass('active');
	// 	});

});

