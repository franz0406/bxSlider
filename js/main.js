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
	
});//document ready jquery 