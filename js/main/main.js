//年份自動更新
 today=new Date();
 y0=today.getFullYear();


//search-mobile

$(function() {
	// go-Top====================================
	$('#go-top').hide();
	$("#go-top").click(function(){
		jQuery('html, body').animate({
			scrollTop:0		// 滑動最終定點
		},500);				// 滑動上去的時間長度，但網站長度越長，滑動速度越快
	});
	$(window).scroll(function() {					//抓整個網頁用window抓每個div是指定class或id
		if ($(this).scrollTop() > 300){				// 捲軸捲動此長度後，會影響下方淡入出現的距離
			$('#go-top').fadeIn('fast');				// 淡入
		} else {
			$('#go-top').stop().fadeOut('fast');		// 淡出(stop是中斷fadeIn狀態)
		};
	});


	function validateEmail(email) {		//email格式判斷
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	// search start =====================
	var $hearSearch = $('.header-search');

	$hearSearch.on('click', '.clear-icon', function () {				// 清除按鈕按下
					$hearSearch.find('.search-input').val('')			// 清空search內容
							   .end().find('.search-results').hide()	// 隱藏搜尋結果
							   .end().find('.clear-icon').hide();		// 隱藏XX
				})
				// .on('click', '.search-input', function () {				// 清除按鈕按下
				// 	$hearSearch.css({})									// 清空search內容
							   
				// })
				.on('keyup', '.search-input', function (e) {			// 輸入搜尋文字
					$hearSearch.find('.search-results').show()				// 搜尋結果顯示
							   .end().find('.clear-icon').show()			// XX顯示
								.end().find('.search-recommend').hide();		   
					if(e.keyCode == 27){								// 有輸入文字的狀態下，按下ESC按鈕
						$hearSearch.find('.search-results').hide()			// 把搜尋結果隱藏
								   .end().find('.search-input').val('');			// 清空search內容
					};
				})
				.on('click', '.search-input', function (e) {
					$hearSearch.find('.search-recommend').show();
					if(e.keyCode == 27){
						$hearSearch.find('.search-recommend').hide();
					}
					if($('.search-input').val() != ''){
						$hearSearch.find('.search-recommend').hide();
					}
				});
	// 所有物件被按下會關閉某個物件(除了那個物件)<<在子昌那邊會出錯，因結帳頁面沒有搜尋會報錯，故要放在子昌的程式，要隱藏>>
	// $(document).click(function (e) {						// html內所有物件被按下
	// 	if(!$.contains( $hearSearch[0], e.target)) {		// 
	// 		$('.header-search .search-results').hide();			// 搜尋結果隱藏
	// 	} 
 // 	});


	//search end =====================

	//喜愛商品模組
	function headerLove () {
		var resize = $(window).width();
		if( $('.header-love span').text() === "0" && resize >= 970) {		// 最愛區塊的數值等於0
			$(".header-love").removeClass("show");			// 隱藏區塊
			$('.header-search').css('right','52px');	// 右邊距調小
			$('.logo').css('width','calc(100% - 183px)');	// LOGO條大
		} else if($('.header-love span').text() === "0" && resize < 970 ){
			$(".header-love").removeClass("show");			// 隱藏區塊
			$('.header-search').css('right','0px');	// 右邊距調小
			$('.logo').css('width','calc(100% - 183px)');	// LOGO條大
		}else if( $('.header-love span').text() > "0"  && resize >= 970) {	// 最愛區塊的數值大於0
			$(".header-love").addClass("show");				// 加上class="show"
			$('.header-search').css('right','102px');// 右邊距調大
			$('.logo').css('width','calc(100% - 245px)');	// LOGO調小
		}else if( $('.header-love span').text() > "0"  && resize < 970) {	// 最愛區塊的數值大於0
			$(".header-love").addClass("show");				// 加上class="show"
			$('.header-search').css('right','0px');// 右邊距調大
			$('.logo').css('width','calc(100% - 245px)');	// LOGO調小
		};
	}

	// 搜尋展開========================================
	$('#mobile-search-btn').click(function(){
		$('#mobile-search-form').toggleClass('show');
	});
	//mobile-nav點擊===================================
	$('#mobile-nav-btn').click(function () {
		$(this).toggleClass('active');
		$('.wrap-mobile-nav').toggleClass('show');
	});
	$('#mobile-nav-list > ul > li > a').click(function () {
		$('#mobile-nav-list li').removeClass('active');
	})
	$('#mobile-nav-list li a').click(function () {
		$(this).parent().toggleClass('active');
		// $(this).next('ul').slideToggle('slow');
	});
	// input註解-不是每一頁都用的到
	// $('.input-box .input-block input').blur(function(){
	// 	if(!$(this).val()) {																	//如果值為空
	// 		$(this).parent().next('span').addClass('show').text($(this).data("missing-error"));			//顯示錯誤訊息
	// 	} else if($(this).val()) {																//如果不為空值

	// 		if($(this).attr("name") === "text") {											//如果name是text
	// 			$(this).next('span').removeClass('show');										//span移除class="show"
	// 		} else if($(this).attr("name") === "email") {									//如果name是email
	// 			if(validateEmail($(this).val())) {												//值符合email格式判斷
	// 				$(this).next('span').removeClass('show');									//span移除class="show"
	// 			} else {																		//值不符合email格式判斷
	// 				$(this).next('span').addClass('show').text($(this).data("format-error"));	//顯示錯誤訊息
	// 			}
	// 		}
	// 	}
	// });
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

	//喜愛商品
	//btn-love是產品頁的
	//adi-heart-default-1是每個輪播商品圖+商品列表的
	$('.btn-love, .icon-love').click(function () {
		$(this).toggleClass('active');

		var loveNum = $('.header-love span').text();

		if ($(this).hasClass('active')) {
			loveNum++;
		}else{
			loveNum--;
		}		

		$('.header-love span').text(loveNum);

		headerLove();
	})
	headerLove();
	$(window).resize(function() {
		headerLove();
	});
	//mobile menu fedback
	$('.feedback-mobile-btn').click(function () {
		$('.feedback-wrap').show();
		$('.feedback-wrap').addClass('active');
	});
	//feedback
	$('.feedback-close').click(function () {
		$('.feedback-wrap').hide();
	})

	$('.feedback-btn').click(function () {
		$('.feedback-wrap').toggleClass('active');
	});
	$('.feedback-bg-box').click(function () {
		$('.feedback-wrap').removeClass('active');
	})
	//feedback-q1
	$('.feedback-love-num li').click(function () {
		$('.feedback-love-num li').removeClass('active');
		$(this).addClass('active');
	});
	function q1_feedbackLoveNum() {
		// 沒有給評分
		var feedbackLoveNum = $('.feedback-love-num li.active').length;
		if( feedbackLoveNum == 0 ){
			$('.feedback-love-num').addClass('error-box');
			$('.feedback-love-num-error').show();
		}else{
			$('.feedback-love-num').removeClass('error-box');
			$('.feedback-love-num-error').hide();
			return true;
		};
	};
	function q1_textareaText() {
		//留言空白
		var textareaText = $('.q1-box .textarea-box textarea').val();
		if( textareaText == ''){
			// alert('123');
			$('.q1-box .textarea-box').addClass('error-box');
			$('.textarea-error').show();
		}else{
			$('.q1-box .textarea-box').removeClass('error-box');
			$('.textarea-error').hide();
			return true;
		};
	};
	$('button.q1-btn').click(function () {
		q1_feedbackLoveNum();
		q1_textareaText();
		if( q1_feedbackLoveNum() && q1_textareaText() ){
			$('.feedback-body').removeClass('q1');
			$('.feedback-body').addClass('q2');
		};
	});
	//feedback-q2
	$('.radio-box input[name=q2]').change(function () {
		if(this.value == 'other'){
			$('.input-box-q2').show();
		}else{
			$('.input-box-q2').hide();
		}
	});
	function other_checked () {
		var q2_radio_other = $('.radio-box input[name=q2]:checked').val();
		var q2_input = $('.q2-text').val() == '';
		if( q2_radio_other == null ){	//判別是否有radio被選取
			$('.radio-q2').addClass('error-box');
			return false;
		}else if( q2_radio_other == 'other' && q2_input ){	//判別radio是否選到'other'且input不為空
			$('.input-box-q2').addClass('error-box');
			$('.radio-q2').removeClass('error-box');
		}else{	//以上兩個條件都達到，則再次移除error-box框架並回傳true
			$('.input-box-q2').removeClass('error-box');
			$('.radio-q2').removeClass('error-box');
			return true;
		};
	}
	$('.q2-btn').click(function () {
		if( other_checked() ){
			$('.feedback-body').removeClass('q2');
			$('.feedback-body').addClass('q3');
		};
	});
	$('.back-q1').click(function () {	//q2回q1
		$('.feedback-body').removeClass('q2');
		$('.feedback-body').addClass('q1');
	});
	//feedback-q3

	function q3_error(isError, target) {
		if(isError){	//條件成立則加上class="error-box"
			target.addClass('error-box');
		}else{			//條件不成立則移除class="error-box"
			target.removeClass('error-box');
		};
	};
	$('.q3-btn').click(function () {
		var q3_input = $('.q3-text').val() == '';	//如果input為空
		var q3_radio = $('.radio-box input[name=q3]:checked').val() == null;	//找input[name=q3]沒有任何一個有checked

		var q2_radio_val = $('.radio-box input[name=q2]:checked').val();
		var q2_radio = q2_radio_val != 'other' && q2_radio_val != 'contact';	//q2的選項不等於other,contact

		q3_error(q3_input, $('.input-box-q3'));
		q3_error(q3_radio, $('.radio-q3'));

		if( !q3_input && !q3_radio && q2_radio ){
			$('.feedback-body').removeClass('q3');
			$('.feedback-body').addClass('q5');
		}else if(!q3_input && !q3_radio && !q2_radio ){
			$('.feedback-body').removeClass('q3');
			$('.feedback-body').addClass('q4');
		}
	});
	$('.back-q2').click(function () {	//q3回q2
		$('.feedback-body').removeClass('q3');
		$('.feedback-body').addClass('q2');
	});
	//feedback-q4
	// function q4_text(isNull, isText) {
	// 	if(isNull){
	// 		isText.parent().addClass('error-box');
	// 	}else{
	// 		isText.parent().removeClass('error-box');
	// 	};
	// }
	$('.q4-box .button-box button').click(function () {
		$('.q4-box .button-box button').removeClass('active');
		$(this).addClass('active');
	});
	$('.q4-btn').click(function () {
		// var	q4_text_input_1 = $('.input-box-q4-1 .q4-text');
		// var	q4_text_input_2 = $('.input-box-q4-2 .q4-text');
		// var q4_text_1 = q4_text_input_1.val() == '';
		// var q4_text_2 = q4_text_input_2.val() == '';

		// q4_text(q4_text_1, q4_text_input_1);	//第一個輸入框判別是否為空
		// q4_text(q4_text_2, q4_text_input_2);	//第二個輸入框判別是否為空
		$('.feedback-body').removeClass('q4');
		$('.feedback-body').addClass('q5');



		// if(q4_text_1 ){
		// 	$('input-box-q4-1 .q4-text').addClass('error-box');
		// }else{
		// 	$('input-box-q4-1 .q4-text').removeClass('error-box');
		// };
		// if(q4_text_2 ){
		// 	$('input-box-q4-2 .q4-text').addClass('error-box');
		// }else{
		// 	$('input-box-q4-2 .q4-text').removeClass('error-box');
		// };
	});
	//new love
	$('.icon-love').click(function () {
		$(this).parent('.product-img-box').toggleClass('active');
	});

	// footer-mobile-nav
		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item01' ,function () {
		// 	$(this).parents('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parents('.wrap-quicklinks').find('.itme01-list').toggleClass('active');
		// });
		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item02' ,function () {
		// 	$(this).parents('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parents('.wrap-quicklinks').find('.itme02-list').toggleClass('active');
		// });
		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item03' ,function () {
		// 	$(this).parents('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parents('.wrap-quicklinks').find('.itme03-list').toggleClass('active');
		// });
		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item04' ,function () {
		// 	$(this).parents('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parents('.wrap-quicklinks').find('.itme04-list').toggleClass('active');
		// });
		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item05' ,function () {
		// 	$(this).parents('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parents('.wrap-quicklinks').find('.itme05-list').toggleClass('active');
		// });
		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item06' ,function () {
		// 	$(this).parents('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parents('.wrap-quicklinks').find('.itme06-list').toggleClass('active');
		// });

		$('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks',function(){
			var eleName = '.'+$(this).data('item');
			if($(eleName).hasClass('active')){
				$(eleName).removeClass('active');
			} else{
				$('.item-list').removeClass('active');
				$(eleName).addClass('active');
			}
		});

		// $('.wrap-footer-search').on('click','.wrap-quicklinks .box-quicklinks.item01' ,function () {
		// 	console.log('test')
		// 	console.log($(this).find('.wrap-quicklinks').children('.item-list'))
		// 	$(this).parent('.wrap-quicklinks').children('.item-list').removeClass('active');
		// 	$(this).parent('.wrap-quicklinks').children('.itme0' + i + '-list').toggleClass('active');
		// });

	// for (i = 1 ; i < 5 ; i++) { 
	// 	var quicklinks = $('.wrap-footer-search .wrap-quicklinks .box-quicklinks.item0' + i);
	// 	quicklinks.click(function () {
	// 		$(this).parent('.wrap-quicklinks').children('.item-list').removeClass('active');
	// 		$(this).parent(".wrap-quicklinks").children('.itme0' + i + '-list').toggleClass('active');
	// 	});
	// }



	// $('.box-quicklinks.item01').click(function () {
	// 	$(this).parent(".wrap-quicklinks").children('.item-list').removeClass('active');
	// 	$(this).parent(".wrap-quicklinks").children('.itme01-list').toggleClass('active');
	// })
	// $('.box-quicklinks.item02').click(function () {
	// 	$(this).parent(".wrap-quicklinks").children('.item-list').removeClass('active');
	// 	$(this).parent(".wrap-quicklinks").children('.itme02-list').toggleClass('active');
	// })
	// $('.box-quicklinks.item03').click(function () {
	// 	$(this).parent(".wrap-quicklinks").children('.item-list').removeClass('active');
	// 	$(this).parent(".wrap-quicklinks").children('.itme03-list').toggleClass('active');
	// })
	// $('.box-quicklinks.item04').click(function () {
	// 	$(this).parent(".wrap-quicklinks").children('.item-list').removeClass('active');
	// 	$(this).parent(".wrap-quicklinks").children('.itme04-list').toggleClass('active');
	// });


	// 移出input時除錯
	$('.input-box.need .input-block input').blur(function () {
		if( $(this).val() == '' ){
			$(this).parents('.input-box').removeClass('correct');	// 打勾
			$(this).parents('.input-box').addClass('error');		// XX
			$(this).parents('.input-box').children('span').text($(this).data("missing-error"));
		} else if ( $(this).val() != '' ){
			$(this).parents('.input-box').removeClass('error');		// XX
			$(this).parents('.input-box').addClass('correct');		// 打勾
		}
	});
	// select 檢查錯誤
	function selectError(outBox) {
		if( outBox.hasClass('need')){
			outBox.addClass('error');
		}
	}
	function BornError(outBox, selectItem) {
		outBox.children(selectItem).addClass('error');
	}

	function selectPass(outBox) {
		if( outBox.hasClass('need')){
			outBox.removeClass('error');
		}
	}
	function BornPass(outBox, selectItem) {
		outBox.children(selectItem).removeClass('error');
	}
	function selectNeed(outBox, YY, MM, DD, Y, M, D) {
		if( YY.val() == 0 ){
			BornError(outBox, Y);
			selectError(outBox);
		} else {
			BornPass(outBox, Y);
		}
		if( MM.val() == 0 ){
			BornError(outBox, M);
			selectError(outBox);
		} else {
			BornPass(outBox, M);
		}
		if( DD.val() == 0 ){
			BornError(outBox, D);
			selectError(outBox);
		} else {
			BornPass(outBox, D);
		}
		if ( YY.val() != 0 && MM.val() != 0 && DD.val() != 0 ){
			selectPass(outBox);
		} 
	}
	$('select').blur(function () {
		var outBox = $(this).parents('.select-area'),
			YY = $('.register-born-y select'),
			MM = $('.register-born-m select'),
			DD = $('.register-born-d select'),
			Y = '.select-box.need.register-born-y',
			M = '.select-box.need.register-born-m',
			D = '.select-box.need.register-born-d';
		selectNeed(outBox, YY, MM, DD, Y, M, D);
	})
	// 送出檢查輸入錯誤
	$('.single-btn').click(function () {
		$.each($('.input-box.need'),function(index, value) {
			if( !$(value).find('input').val() ){
				$(value).addClass('error');
				$(value).find('span').text( $(value).find('input').data("missing-error") );
			}
		});

		// 核取方塊檢查
		$.each($('.checkbox-wrap.need'), function(index, value){
			if( !$(value).find('input').prop('checked') ){
				$(value).addClass('error');
				$(value).find('span').text( $(value).find('input').data("missing-error") );
			} else{
				$(value).removeClass('error');
				$(value).find('span').text('');
			};
		});
		$('.checkbox-wrap.need input').change(function () {
			$(this).parents('.checkbox-wrap.need').removeClass('error');
			$(this).parents('.checkbox-wrap.need').find('span').text('');
		});
		// select 檢查
		var outBox = $(this).parents('.register-area').find('.select-area'),
			YY = $('.register-born-y select'),
			MM = $('.register-born-m select'),
			DD = $('.register-born-d select'),
			Y = '.select-box.need.register-born-y',
			M = '.select-box.need.register-born-m',
			D = '.select-box.need.register-born-d';
		selectNeed(outBox, YY, MM, DD, Y, M, D);
	});

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

	// index-new

	$('.close-new').click(function () {
		$('body').removeClass('index-news');
	});
	// 金額加上千分位 Start
	// html 加上 data-price="true"
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
	// 金額加上千分位 End
});