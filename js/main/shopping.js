function pdtPrice(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function price(x) {
	var price = pdtPrice(x.html());
	x.html(price);
}
$(function () {
	$("[data-price='true']").each(function () {
		price($(this));
	});
});