$(function() {

	function sizeTable() {
		var resize = $(window).width();

		return resize >= 1024;
	}
	// 縱向跟著滑動產生藍框
	$('.size-list-box tr td').hover(
		function () {
			if(!sizeTable()) {
				return;
			}
			tdHover = $(this).index();
			$($(this).parents('.size-list-box').find('tr')).each(function () {
				$(this).find('td').eq(tdHover).addClass('active');
			});
		},
		function () {
			tdHover = $(this).index();
			$($(this).parents('.size-list-box').find('tr')).each(function () {
				$(this).find('td').eq(tdHover).removeClass('active');
			});
		}
	);
	// 標頭滑過換色
	$('.size-list-box tr').hover(
		function () {
			if(!sizeTable()) {
				return;
			}
			trHover = $(this).index();
			$($(this).parents('.popup-main').find('.size-header .title')).eq(trHover).css({
				'background': '#0286CD'
			})
		},
		function () {
			trHover = $(this).index();
			$($(this).parents('.popup-main').find('.size-header .title')).eq(trHover).css({
				'background': '#5C5C5C'
			})
		}
	);

	// size-chart頁面 =======================
	// 男女切換
	$('.gender-men').click(function () {
		$(this).addClass('active');
		$('.gender-men-box').addClass('active');
		$('.gender-woman, .gender-woman-box').removeClass('active');
	});
	$('.gender-woman').click(function () {
		$(this).addClass('active');
		$('.gender-woman-box').addClass('active');
		$('.gender-men, .gender-men-box').removeClass('active');
	});

	// 品牌尺寸打開
	$('.gender-list-header').click(function () {
		$(this).parent().toggleClass('active');
	});
});