# Momentum app clone

Nomad coder 바닐라 JS로 크롬 앱 만들기 코스의 대한 내용입니다.  
배운 내용을 정리해가며 작성하고 정리하는 것에 목적을 두었습니다.
<br/><br/>
[Nomadcoders.co](https://nomadcoders.co/)
<br/><br/>

---

## 1. Login 기능

유저의 이름을 입력하고 저장할 수 있게합니다

- html의 `form` 태그를 활용하여 JS에서 이벤트를 제어

- 브라우저 localStorage 를 사용하여 유저의 이름을 브라우저에 저장

- `if else` 문을 활용하여 localStorage에 데이터가 없을 경우 폼이 생성
  <br/><br/>

## 2. Clock 기능

유저의 로컬 시간을 시간:분:초 로 출력해 주는 기능입니다.

- `Date()` 내장 객체를 이용

- setInterval을 1000ms(1s) 의 일정한 간격을 두고 재 출력하는 식으로 매 초마다 실시간으로 시간이 재출력
  <br/><br/>

## 3. Random elements 기능

초기 로드 시 명언과 배경 이미지가 출력되는 기능입니다.

Math 내장객체를 활용하여 무작위한 수를 생성하여 대입시켰습니다.

1. 명언(quote.js)

   - 명언과 작가를 오브젝트로 묶어 배열로 변수 선언
   - `Math` 를 통하여 배열의 length를 이용한 수를 받아옴
   - 명언과 작가를 같은 배열의 수로 받아 화면에 출력함
     <br/><br/>

2. 배경(background.js)

   - 이미지 파일명과 동일하게 배열의 생성
   - `Math` 를 통하여 배열의 length를 이용한 수를 받아옴
   - `img` html 객체를 생성하여 화면에 출력

     _파일명이 동일하게 배열을 일일히 만들어야한다는 단점 보완필요_
     <br/><br/>

## 4. To-do List 기능

일반적인 할일 목록 기능입니다.  
폼을 활용하여 유저가 입력하고 아래 순서대로 출력합니다.

- html의 `form` 태그를 활용하여 JS에서 이벤트를 제어

- html에 ul/li 구조로 생성하여 todo는 `li`태그로 출력

- 브라우저 localStorage 를 사용하여 유저의 이름을 브라우저에 저장

- localStorage의 아이템을 `JSON`을 이용하여 array로 변환하고 내부의 todo 입력 시 오브젝트로 생성하여 관리

- todo 삭제는 버튼에 이벤트를 리스닝함  
  `filter()`를 통하여 삭제를 구현

  _순서 변경 및 체크 박스를 통한 삭제 검토중_
