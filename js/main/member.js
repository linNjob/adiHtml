$(function() {
	// mobile member主nav開關
	$('.member-mobile-btn').click(function () {
		$('.member-nav').toggleClass('active');
	});

	// member-account-infor.html 我的個人訊息 Start
	// member 修改密碼開關
	$('.change-pw-btn, .btn-change-pw-close').click(function () {
		$('.change-pw-box').toggle();
	});

	// 個資修改
	$('.member-change-data1-btn').click(function () {
		$('.member-change-data1').hide();
		$('.member-change-data2').show();
	});
	$('.member-change-data2-cancel, .member-change-data2-save').click(function () {
		$('.member-change-data2').hide();
		$('.member-change-data1').show();
	});
	// member-account-infor.html 我的個人訊息 End







	// member 修改個資
	// $('.change-self-infor-btn').click(function () {
	// 	$('.change-self-infor').addClass('active');
	// 	$(this).parents('.member-main-body').find('.member-list').hide();
	// 	$(this).parents('.member-main-body').find('.change-btn').hide();
	// });
	// $('.btn-change-pw-close').click(function () {
	// 	$('.change-self-infor').removeClass('active');
	// 	$(this).parents('.member-main-body').find('.member-list').show();
	// 	$(this).parents('.member-main-body').find('.change-btn').show();
	// });

	// 個資修改

	// $('.member-change-data1-btn').click(function () {
	// 	$('.member-change-data1').hide();
	// 	$('.member-change-data2').show();
	// });
	// $('.member-change-data2-cancel, .member-change-data2-save').click(function () {
	// 	$('.member-change-data2').hide();
	// 	$('.member-change-data1').show();
	// });
});