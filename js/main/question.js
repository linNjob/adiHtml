$(function() {
	$('.question-sort .question-list li').click(function () {
		// alert('123');
		// $(this).removeClass('active');
		$(this).parents('.question-list').find('li').removeClass('active');
		$(this).addClass('active');
	});
});