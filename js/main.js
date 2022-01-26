$(function(){
	
	// 기본 슬라이드 - Fade Effect
	$('.basic_slider').bxSlider({
		mode: 'fade',
		pager: false
	});

	// 슬라이드 - Control
	$('.slider_control').bxSlider({
		mode: 'horizontal',
		pager: false,
		controls: true,
		nextText: '<i class="fas fa-chevron-right"></i>',
		prevText: '<i class="fas fa-chevron-left"></i>'
	});

	// 슬라이드 - Custom Control
	$('.custom_control_slider').bxSlider({
		mode: 'horizontal',
		pager: false,
		controls: true,
		nextSelector: ".custom_controls .next",
		prevSelector: ".custom_controls .prev"

	});
	
	// 멀티 슬라이드 - Multiple Slide
	$(".multiple_slider").bxSlider({
		pager: false,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 320,
		slideMargin: 30,
		shrinkItems: true
	});

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
	});

});//document ready jquery 