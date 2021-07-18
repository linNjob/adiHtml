$(function() {
	// 移出input時除錯
	$('.input-box .input-block input').blur(function () {
		if( $(this).val() == '' ){
			$(this).parents('.input-box').addClass('active');
			$(this).parents('.input-box').children('span').text($(this).data("missing-error"));
		} else if ( $(this).val() != '' ){
			$(this).parents('.input-box').removeClass('active');
		}
	});
	// 送出檢查輸入錯誤
	$('.single-btn').click(function () {
		$.each($('.input-box.need'),function(index, value) {
			console.log($(value).find('input'));
			if( !$(value).find('input').val() ){
				$(value).addClass('active');
				$(value).find('span').text( $(value).find('input').data("missing-error") );
			}
		});
	});
	
		// if( $(this).parents($('.select-area')).child('select').val() == '' ){
		// 	console.log(2)
		// }
		// $(this).parents($('.select-area')).child('select').vul().addClass('error');
	// $("select[name=date-yy]").blur(function(){
	// 	if($(this).val() === '年') {
	// 		$('#prompt-error').addClass('show').text($(this).data("missing-error"));
	// 	}
	// });
	// $("select[name=date-mm]").blur(function(){
	// 	if($(this).val() === '月') {
	// 		$('#prompt-error').addClass('show').text($(this).data("missing-error"));
	// 	}
	// });
	// $("select[name=date-dd]").blur(function(){
	// 	if($(this).val() === '日') {
	// 		$('#prompt-error').addClass('show').text($(this).data("missing-error"));
	// 	}
	// });
});
