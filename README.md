# BX Slider 활용법

### 기본 슬라이드 - Fade 효과
```
$('JQuery 선택자').bxSlider({
  mode: 'fade',
  pager: false
});
```
**Boolean 타입 입력할때 따옴표를 넣어서 string 타입으로 적용되지 않게 주의**
***
### 슬라이드 - Controls
```
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
```
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

	$('.custom_slider').bxSlider({
    controls: true,
		nextSelector: ".slide_wrapper .next",
		prevSelector: ".slide_wrapper .prev"
	});
```

``` 
HTML 작성시 웹접근성 고려하지 않아도 된다.

    <div class="controls">
      <span class="prev"> <!-- 이곳에 a태그와 내용 prev 자동생성 --> </span>
      <span class="next"> <!-- 이곳에 a태그와 내용 next 자동생성 --> </span>
    </div>


Step 1. Selector 로 선택한 요소의 자식으로 a 태그가 자동으로 생성된다 .

Step 2. CSS 스타일작업시 Selector의 자식 a 태그 선택 후 작업.

Step 3. a 태그의 content에 텍스트가 자동생성되니 CSS의 text-indent 속성활용
```
***