(function () {

	// pop
		var $openPrize = $('.open_prize');
		var $openPoint = $('.open_point');
		var $openDetail = $('.btn_detail');
		var $openPrivacy = $('.btn_privacy');
		var $openTime = $('.btn_time');
		var $popClose = $('.popclose');

		var $inforClose = $('.information_pop_btn');
		var $popBox = $('.popup_box');
		var $introPop = $('.productintro');
		var $signin = $('.circle');
		//
		$openPrize.on('click', function (e) {
			e.preventDefault();
			$('.signin_przie').fadeIn();
		});

		$openPoint.on('click', function (e) {
			e.preventDefault();
			$('.signin_point').fadeIn();
		});

		// $introPop.on('click', function (e) {
		// 	e.preventDefault();
		// 	$('.product_intro').fadeIn();
		// });

		$openTime.on('click', function (e) {
			e.preventDefault();
			$('.wrap_time').fadeIn();
		});

		$signin.on('click', function (e) {
			e.preventDefault();
			$('.signin_sucess').fadeIn();
		});

		$openPrivacy.on('click', function (e) {
			e.preventDefault();
			$('.popup_box').fadeIn();
		});

		$openDetail.on('click', function (e) {
			e.preventDefault();
			$('.wrap_detail').fadeIn();
		});

		$popClose.on('click', function (e) {
			e.preventDefault();
			$popBox.fadeOut();
		});

		$inforClose.on('click', function (e) {
			e.preventDefault();
			$popBox.fadeOut();
		});

		// 許願清單產品介紹
		var $introduceBtn = $('.productintro');
		var $productPop = $('.product_intro');
		$introduceBtn.on('click', function (e) {
			e.preventDefault();
			var i = $introduceBtn.index(this);
			var $productIntro = $('.product_intro').eq(i);
			$productPop.eq(i).fadeIn();
		});

		// 查詢許願紀錄demo
		var $searchBtn = $('.search_btn');
		var $productBox = $('.product');
		$searchBtn.on('click', function (e) {
			e.preventDefault();
			$productBox.show();
		});

		// 收合
	  var $panelOpen = $(".panel");

	  $panelOpen.on('click', function (e) {
	    e.preventDefault();
	    var $this = $(this);
	    var $panelBox = $this.parents('.wcontainer').find('.panel_contain');

	    // 按鈕切換
	    $this.toggleClass('close');

	    // 內容切換
	    if ($panelBox.hasClass('active')) {
	      $panelBox.removeClass('active');
	    } else {
	      $panelBox.addClass('active');
	    }
	  });


	  // menu
		// var $menuBtn = $('.menu');
		// $menuBtn.on('click', function (e) {

		// 	var $menu = $(".menubox");
		// 	var $header = $("header");
	  //   var $this = $(this);
	  //   e.preventDefault();

	    // 選單按鈕的切換
	    // $this.toggleClass('close');

	    // 選單內容的切換
	  //   if ($menu.hasClass('active')) {
	  //     $menu.removeClass('active');
	  //   } else {
	  //     $menu.addClass('active');
	  //   }
		// });

			  // menu
				var $menuBtn = $('.menu');
				$menuBtn.on('click', function (e) {
		
					var $menu = $(".menubox");
					var $header = $("header");
					var $headerbg = $(".headerbg");
					var $finishbox = $(".finish_box");
					var $this = $(this);
					e.preventDefault();
		
					// 選單按鈕的切換
					$this.toggleClass('close');
		
					// 選單內容的切換
					if ($menu.hasClass('active')) {
						$menu.removeClass('active');
					} else {
						$menu.addClass('active');
					}

					// headerbg
					if ($headerbg.hasClass('active')) {
						$headerbg.removeClass('active');
					} else {
						$headerbg.addClass('active');
					}
					// finishbox
					if ($finishbox.hasClass('active')) {
						$finishbox.removeClass('active');
					} else {
						$finishbox.addClass('active');
					}
				});


		var $tag = $('.dm_tag a');


		$tag.on('click', function (e) {
			e.preventDefault();
			var $this = $(this);

			var tag = $this.prop('href').substring($this.prop('href').indexOf('#'));
			var $content = $(tag);
			var height = $('.header_content').height();
			var margin = parseInt($('.wrap_inner').css('margin-top'), 10) || 0;
			var padding = parseInt($content.css('padding-top'), 10) || 0;
			var top = ($content.offset() || {}).top;
			var top2 = $('.wrap_inner').offset().top;
			// var scrollTop = $(window).scrollTop()

			var diduration = Math.max(top / 2, 800);
			diduration = Math.min(diduration, 1000);
			$('.wrap_content').stop().animate({
				scrollTop: top - top2 + margin +  padding + height
			}, {
				duration: diduration
			});

			var $content1 = $('#tag-1');
			var $dmTop = ($content1.offset() || {}).top;
			// console.log(top - top2);
		});

		var scrollHeight = $('.wrap_inner').offset().top;
		var tagTop = ($('.tag_wrap').offset() || {}).top;
		// var minHeight = $('#tag-1').offset().top;

		var $goTop = $('.tag_top');
		// $('.tag_top').fadeIn();
		$goTop.on('click', function (e) {
		  e.preventDefault();

			var diduration = Math.max(tagTop / 2, 800);
			diduration = Math.min(diduration, 1000);
			$('.wrap_content').stop().animate({
				scrollTop: tagTop - scrollHeight
			}, {
				duration: diduration
			});
		});

		$('.wrap_content').on('scroll', function () {
			var scrollTop = $(this).scrollTop();
			if (scrollTop > tagTop - scrollHeight) {
				$goTop.show();
			} else {
				$goTop.hide();
			}
		});

})();
