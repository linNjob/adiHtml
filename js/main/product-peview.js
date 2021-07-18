$(function() {
	//start-block
	function startFor(thisStartNum) {	//星評分使用的迴圈，補足往前的星號
		for( var i = 1; i <= thisStartNum ; i++){
			$('.product-peview-start-box li.start' + i).addClass('active');
		};
	};
	function scoreRemark(thisRemark) {	//表單點擊後的註釋
		$(thisRemark).parent().siblings('.remark').html($(thisRemark).data('start-label'));
	}
	$('.product-peview-start-box li').click(function () {	//星星按下
		$('.product-peview-start-box li').removeClass('active');
		var thisStartNum = $(this).index() + 1;
		$('.product-peview-start-box').data('star-click', thisStartNum);
		startFor(thisStartNum);	//計算出線幾個星星
		scoreRemark(this);	//表單點擊後引入的註釋
	});
	
	$('.product-peview-start-box li').mouseenter(function () {
		$('.product-peview-start-box li').removeClass('active');
		var thisStartNum = $(this).index() + 1 ;
		startFor(thisStartNum);	//表單點擊後引入的註釋
	});

	$('.product-peview-start-box li').mouseout(function () {
		$('.product-peview-start-box li').removeClass('active');
		var startNum = $('.product-peview-start-box').data('star-click')
		if( startNum > 0 ){
			startFor(startNum);	//計算出線幾個星星
		};
	});
	//YorN-block
	$('.product-peview-YorN-box li').click(function () {
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
		scoreRemark(this);	//表單點擊後引入的註釋
	});
	//radio-block
	$('.product-peview-radio-box li').click(function () {
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');
		scoreRemark(this);	//表單點擊後引入的註釋
	});

	//input-file
	function readURL(input) {
		if (input.files && input.files[0]) {
			for(var i = 0 ; i < input.files.length ; i++){
				var reader = new FileReader();
				reader.onload = function (e) {
					$('.input-file-img-box').append('<li class="file-img" style="background-image: url(' + e.target.result + ')"></li>');
				}
				reader.readAsDataURL(input.files[i]);
			}
		}
	}
    
    $("#imgInp").change(function(){
        readURL(this);
    });


	//檢測
    function errorExamine(activeExamine,activeItem,titleError) {
    	if(!$(activeExamine).hasClass('active')){
			$(activeItem).addClass('active');
			$(titleError).addClass('error');
		}else {
			$(activeItem).removeClass('active');
			$(titleError).removeClass('error');
		};
    };
    function errorExamineVal(varExamine,activeItem,titleError) {
    	if($(varExamine).val() == ''){
			$(activeItem).addClass('active');
			$(titleError).addClass('error');
		}else {
			$(activeItem).removeClass('active');
			$(titleError).removeClass('error');
		};
    };
    $('.product-peview').click(function () {
    	errorExamine('.product-peview-start-box li','.error-box-all .overall-rating','.product-peview-start-wrap .product-peview-item-title');
		errorExamine('.product-peview-YorN-box li','.error-box-all .YorN','.product-peview-YorN-wrap .product-peview-item-title');
		errorExamine('.radio-size li','.error-box-all .radio-size','.radio-size .product-peview-item-title');
		errorExamine('.product-peview-radio-wrap.radio-width li','.error-box-all .radio-width','.radio-width .product-peview-item-title');
		errorExamine('.product-peview-radio-wrap.radio-comfort li','.error-box-all .radio-comfort','.radio-comfort .product-peview-item-title');
		errorExamine('.product-peview-radio-wrap.radio-quality li','.error-box-all .radio-quality','.radio-quality .product-peview-item-title');
		errorExamineVal('.textarea-box textarea','.error-box-all .textarea-box','.textarea-box .product-peview-item-title');
		errorExamineVal('.nickname-box input','.error-box-all .nickname-box','.nickname-box .product-peview-item-title');
		
		var emailRegxp = /[\w-]+@([\w-]+\.)+[\w-]+/;

		if(!emailRegxp.test($('.email-box input').val())){
			$('.error-box-all .email-box').addClass('active');
			$('.email-box .product-peview-item-title').addClass('error');
		}else {
			$('.error-box-all .email-box').removeClass('active');
			$('.email-box .product-peview-item-title').removeClass('error');
		};
    	//判別是否有error
    	if($('.error-box-all li').hasClass('active')){
    		$('.error-box-all').show();
    	}else{
    		$('.error-box-all').hide();
    	}
    })
});

