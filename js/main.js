$(function(){
	
	// 기본 슬라이드 - Fade Effect
	$('.basic_slider').bxSlider({
		mode: 'fade',
		pager: false
	}); // Fade Effect ends


	// 슬라이드 - Control
	$('.slider_control').bxSlider({
		mode: 'horizontal',
		pager: false,
		controls: true,
		nextText: '<i class="fas fa-chevron-right"></i>',
		prevText: '<i class="fas fa-chevron-left"></i>'
	}); // Control ends


	// 슬라이드 - Custom Control
	$('.custom_control_slider').bxSlider({
		mode: 'horizontal',
		pager: false,
		controls: true,
		nextSelector: ".custom_controls .next",
		prevSelector: ".custom_controls .prev"

	}); // Custom Control ends

	
	// 멀티 슬라이드 - Multiple Slide
	$(".multiple_slider").bxSlider({
		pager: false,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 320,
		slideMargin: 30,
		shrinkItems: true
	}); // Multiple Slide ends


	// 현재 활성화 된 슬라이드 - Active Slide
	const activeSlideList = $(".active_slider > li");

	$(".active_slider").bxSlider({
		mode: 'vertical',
		pager: false,
		onSliderLoad: currentIndex => { 
			activeSlideList.eq(currentIndex).addClass("active");
		},
		onSlideAfter: $slideElement => {
			$slideElement.addClass("active").siblings().removeClass("active");
		},
		nextText:"Slide Up",
		prevText:"Slide Down"
	}); // Active Slide ends


	// 슬라이더 Public Methods 활용
	let manualSlider = $('.option_slider').bxSlider({
		pager: false,
		controls: false,
		auto: true
	}); 

	const menualWrapper = $('.option_slider_wrapper'),
		    menualControls = menualWrapper.find('.controls span'),
				menualPager = menualWrapper.find('.pager span'),
				menualAutoSlide = menualWrapper.find('.auto span');
	
	menualControls.click(function(){
		if( $(this).hasClass('prev') ){
			manualSlider.goToPrevSlide();
		}else{
			manualSlider.goToNextSlide();
		}
	})

	menualPager.click(function(){
		let idx = $(this).index();
		manualSlider.goToSlide(idx);
	})

	menualAutoSlide.click(function(){
		if( $(this).hasClass('auto') ){
			manualSlider.startAuto();
		}else{
			manualSlider.stopAuto();
		}
	})// Public Methods ends


});//document ready jquery 