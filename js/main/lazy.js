//延遲載入
$(function() {
	$("img.lazy").lazyload({
		threshold : 300	//高度300內的會先載入
	});
});