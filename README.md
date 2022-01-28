# JQuery 슬라이드 플러그인 BX Slider 활용법
###### https://franz0406.github.io/bxSlider/


### 기본 슬라이드 - Fade 효과
```javascript
$('JQuery 선택자').bxSlider({
  mode: 'fade',
  pager: false
});
```
**Boolean 타입 입력할때 따옴표를 넣어서 string 타입으로 적용되지 않게 주의**
***
### 슬라이드 - Controls
```javascript
$('JQuery 선택자').bxSlider({
  controls: true,
  nextText: TEXT 혹은 HTML 태그를 String 타입으로 입력,

  prevText: ex) "<i class="fas fa-chevron-left></i>",
  prevText: ex) "이전 슬라이드"
});
```
**개발자도구로 클래스명 확인 후 CSS로 커스텀 가능**
***
#### 슬라이드 - Custom Controls
```html
  <div class="slide_wrapper">
    <div class="custom_slider">
      <div>슬라이드 1</div>
      <div>슬라이드 2</div>
      <div>슬라이드 3</div>
      <div>슬라이드 4</div>
    </div>
    <div class="controls">
      <span class="prev"></span>
      <span class="next"></span>
    </div>
  </div>
```
```javascript
	$('.custom_slider').bxSlider({
    controls: true,
		nextSelector: ".slide_wrapper .next",
		prevSelector: ".slide_wrapper .prev"
	});
```


HTML 작성시 웹접근성 고려하지 않아도 된다.
```html
  <div class="controls">
    <span class="prev"> <!-- 이곳에 a태그와 내용 prev 자동생성 --> </span>
    <span class="next"> <!-- 이곳에 a태그와 내용 next 자동생성 --> </span>
  </div>
```


Step 1. Selector 로 선택한 요소의 자식으로 a 태그가 자동으로 생성된다 .  


Step 2. CSS 스타일작업시 Selector의 자식 a 태그 선택 후 작업.  


Step 3. a 태그의 content에 텍스트가 자동생성되니 CSS의 text-indent 속성활용  


***
---
## Public Methods 활용 더 쉽게 커스텀 슬라이드

퍼블릭 메소드 옵션을 사용함으로 더욱 편하게 작업 가능


###### 기존 커스텀 방식과 차이는?

기존 방식은 Bx Slider의 생성된 태그를 활용해야 했지만,  
Public Methods 옵션 사용시 HTML과 CSS를 사용자가 마음껏 적용 후  
제이쿼리객체로 가져와 메소드 적용만 해주면 끝.


```html
<div class="slider_wrap">
  <ul class="slider">
    <li>slide 1</li>
    <li>slide 2</li>
    <li>slide 3</li>
    <li>slide 4</li>
  </ul>
  <div class="controls">
    <span class="prev">prev</span>
    <span class="next">next</span>
  </div>
  <div class="pager">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </div>
  <div class="auto">
    <span class="auto">auto</span>
    <span class="stop">stop</span>
  </div>
</div>
```
```javascript
const wrapper = $('.slider_wrap'),
      controls = Wrapper.find('.controls span'),
      pager = Wrapper.find('.pager span'),
      auto = Wrapper.find('.auto span');

let slider = $('.slider').bxSlider({ 
  pager: false,
  controls: false,
  auto: true
}); 

Controls.click(function(){
  if( $(this).hasClass('prev') ){
    slider.goToPrevSlide();
  }else{
    slider.goToNextSlide();
  }
});

pager.click(function(){
  let idx = $(this).index();
  slider.goToSlide(idx);
});

auto.click(function(){
  if( $(this).hasClass('auto') ){
    slider.startAuto();
  }else{
    slider.stopAuto();
  }
});
```
Public Methods  
- goToSlide( index ) : 매개변수로 들어온 숫자의 슬라이드로 이동. 페이저에 활용하며 index 인자를 활용할수 있다.
- goToPrevSlide() : 이전 슬라이드로 이동.
- goToNextSlide() : 다음 슬라이드로 이동.
- startAuto(); : 슬라이드 자동
- stopAuto(); : 슬라이드 멈춤


**기존 방식과 다르게 옵션이 메소드라 외부에서 사용해야 한다.**


---
---

## 멀티 슬라이드 - Multiple Slide

```javascript
	$("JQuery 선택자").bxSlider({
		minSlides: 1,        // 최소 슬라이드
		maxSlides: 3,        // 최대 슬라이드
		moveSlides: 1,       // 움직이는 슬라이드
		slideWidth: 320,     // 슬라이드 너비 값
		slideMargin: 30,     // 슬라이드 간격
		shrinkItems: true    // 브라우저 너비에 맞게 반응형
	});
```
---
---
## 활성화 슬라이드 - Active Slide
```javascript
	$("JQuery 선택자").bxSlider({
		mode: 'fade',
		onSliderLoad: (currentIndex) => { 
			슬라이더 로드 후 실행할 코드 작성 ;
		},
		onSlideAfter: $slideElement => {
			다음 슬라이더 진행 후 실행할 코드 작성 ;
		}
	});
```


onSliderLoad 옵션에는 함수를 작성해야하고 currentIndex 인자 활용으로 첫번째 슬라이더의 index 가져올수 있다.


onSlideAfter 옵션은 3가지의 인자를 활용 가능.  
1. $slideElement : 현재의 슬라이드를 제이쿼리 오브젝트로 가져온다.  
2. oldIndex : 이전 슬라이드의 index를 가져온다.  
3. newIndex : 현재 슬라이드의 index를 가져온다.  


**함수의 인자명은 바꿀수 없음**


---
---
### Tap Slider

##### Step 1. HTML
```html
<script src="https://제이쿼리 로드"></script>
<script src="https://제이쿼리 UI 로드"></script>

<div id="tabs">
  <ul>
    <li><a href="#tabs-1">텝메뉴 1</a></li>
    <li><a href="#tabs-2">텝메뉴 2</a></li>
    <li><a href="#tabs-3">텝메뉴 3</a></li>
  </ul>
  <div id="tabs-1">
    <p>tabs-1 Contents</p>
  </div>
  <div id="tabs-2">
    <p>tabs-2 Contents</p>
  </div>
  <div id="tabs-3">
    <p>tabs-3 Contents</p>
  </div>
</div>
```
##### Step 1. JavaScript
```javascript
$(".tap_slide").bxSlider({
		pager: false
});

$( ".tap_slider_wrapper" ).tabs();
```
tabs ui를 bxSlider 뒤에 작성해야한다.  
tabs ui가 먼저 적용되면 활성화된 탭메뉴 외에는 전부 display:block; 처리되어 bxSlider가 적용이 안된다.  
bxSlider를 먼저 모든 탭메뉴에 적용시킨 후 tabs ui를 사용하도록 한다. 