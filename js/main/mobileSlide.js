$(function () {
	$.fn.mobileSlide = function (options) {
		var container = $(this);
		var offset = options.offset ? options.offset : -50;		// 滑動距離
		var slideItem = options.slideItem ? options.slideItem : 'li';		// 指定滑動的item
		var initX;
		var translateX;
		var onClick = false;
		var clickContainer;

		function start(target, x) {
			var transform = $(target).css('transform');

			initX = x;
			translateX = transform === 'none' ? 0 : Number(transform.split(',')[4]);
		};

		function move(target, x) {
			var currentX = x;
			var moveX = currentX - initX;
			var diff = translateX === 0 ? moveX : moveX + translateX;

			if (diff < offset) {
				$(target).css('transform', 'translateX(' + offset + 'px)');
			} else if (diff > 0){
				$(target).css('transform', 'translateX(0)');
			} else{
				$(target).css('transform', 'translateX(' + diff + 'px)');
			}
		};

		function end(target) {
			var diff = $(target).css('transform').split(',')[4];

			if (diff > offset *.5){
				$(target).css('transform', 'translateX(0)');
			} else {
				$(target).css('transform', 'translateX(' + offset + 'px)');
			}

			$.each(container.find(slideItem), function (index, value) {
				if (target !== value){
					$(this).css('transform', 'translateX(0)');
				}
			});
		};

		container.find(slideItem).on('touchstart', function (e) {
			start(this, e.originalEvent.targetTouches[0].pageX);
		}).on('touchmove', function (e) {
			move(this, e.originalEvent.targetTouches[0].pageX);
		}).on('touchend', function (e) {
			end(this);
		});

		container.find(slideItem).on('mousedown', function (e) {
			onClick = true;
			clickContainer = this;

			start(this, e.pageX);
		}).on('mousemove', function (e) {
			if(onClick && clickContainer === this) {
				move(this, e.pageX);
			}
		}).on('mouseup', function (e) {
			end(this);

			onClick = false;
		});

		// 
		$('body').click(function (e) {
			console.log(e);
			if(!$.contains(container[0], e.target)) {
				$(clickContainer).css('transform', 'translateX(0)');
			}
			
		})
	};
});