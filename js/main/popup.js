$(function() {
	$('#popup-open-btn').click(function () {
		$('body').addClass('popup-show');
	});
	$('#popup-video-open-btn').click(function () {
		$('body').addClass('popup-show');
		$('.video-wrap .video-box').append('<iframe frameborder="0" allowfullscreen src="https://www.youtube.com/embed/UQ4ytWPE-HY?rel=0&autoplay=1&loop=1"></iframe>')
	});

	$('.close-btn, .popup-close-btn').click(function () {
		$('body').removeClass('popup-show');
		$('body').removeClass('popup-show-buy');
		$('body').removeClass('popup-show-size');
		$('body').removeClass('popup-shopping-userdata-show');
		$('body').removeClass('popup-del-show');
		$('body').removeClass('shopping-inventory-show');
	});
	$('.popup-bg').click(function () {
		$('body').removeClass('popup-show');
		$('body').removeClass('popup-show-buy');
		$('body').removeClass('popup-show-size');
		$('body').removeClass('popup-shopping-userdata-show');
		$('body').removeClass('popup-del-show');
		$('body').removeClass('shopping-inventory-show');
	});
	// video
	$('.video-wrap .close-btn').click(function () {
		$('.video-wrap .video-box iframe').remove();
	});
	$('.video-wrap .popup-bg').click(function () {
		$('.video-wrap .video-box iframe').remove();
	});
	$('.btn-buy').click(function () {
		$('body').addClass('popup-show-buy');
	});
	// 尺寸表
	$('.size-chart').click(function () {
		$('body').addClass('popup-show-size');
	});


	//product-peview-terms
	$('#popup-open-btn-guidelines').click(function () {
		$('body').addClass('popup-show');
		$('.popup-wrap').show();
		$('.popup-wrap.terms').hide();
	});
	$('#popup-open-btn-terms').click(function () {
		$('body').addClass('popup-show');
		$('.popup-wrap').show();
		$('.popup-wrap.guidelines').hide();
	});
	$('.popup-wrap.terms .popup-bg, .popup-wrap.guidelines .popup-bg').click(function () {
		$('body').removeClass('popup-show');
		$('.popup-wrap').hide();
	});
	$('.popup-wrap.terms .close-btn, .popup-wrap.guidelines .close-btn').click(function () {
		$('body').removeClass('popup-show');
		$('.popup-wrap').hide();
	});
	$('.popup-header.guidelines, .popup-main.guidelines').hide();
	$('.btn-guidelines').click(function () {
		$('.popup-header.guidelines, .popup-main.guidelines').show();
	});

	//shopping
	$('.pdt-change-btn .pdt-del').click(function () {
		$('body').addClass('popup-del-show');
	});
	$('.shopping-inventory .popup-close-btn').click(function () {
		$('body').removeClass('shopping-inventory-show');
	});

	// shopping-userdata
	$('.popup-shopping-userdata').click(function () {
		$('body').addClass('popup-shopping-userdata-show');
	});
	$('.shopping-userdata .close-btn').click(function () {
		$('body').removeClass('popup-shopping-userdata-show');
	});

	// member-invoice 發票索取
	$('.take-invoice').click(function () {
		$('body').addClass('popup-show');
		$('.take-invoice-popup').show();
	});
	$('.close-btn, .popup-bg, .cancel-btn').click(function () {
		$('body').removeClass('popup-show');
		// $('.popup-wrap').hide();
	});
});