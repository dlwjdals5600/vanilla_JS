# Vanilla JS 연습

## Personal Toy project(연습)

-  SE6 문법을 이용해서 프로젝트를 진행

### Toy project 기간

- 기간 : 2022/03/19 ~ 2022/03/21
- 인원 : 혼자

<br>


### Project 진행과정

- querySelector()에 id,class를 이용해서 html 태그들을 가져와서 작업
- preventDefault()를 이용해서 브라우저의 기본기능(submit하고 새로고침)을 막고 기능을 구현
- 저장소는 브라우저의 localStorage를 이용
- new Date()를 이용해서 시계를 구현
- todo를 만들때는 간단한 arrow function 이용
- fetch()를 이용해서 API를 호출해서 얻은 값을 html에 대입

#### greeting
- 유저 이름을 입력하게해서 환영하는 문구를 html에 출력
- 유저입력란 폼에 hidden이 적용된 상태에서 localStorage에 유저 이름이 없을 경우 hidden을 제거

#### clock
- new Date()를 이용해서 데이터를 받은 후 html에 적용

#### quotes
- 명언과 저자를 객체형태로 저장 후 html에 적용

#### todo
- 할일을 적어서 submit 했을 때 id,text를 객체형태로 저장해서 배열에 저장
- JSON.stringify를 이용해서 배열을 String으로 변환해서 localStorage에 저장
- if문을 이용해서 localStorage에 정보가 저장되어 있을때는 JSON.parse()를 이용해서 배열로 변경해서 기존 배열에 저장해서 새로고침해도 사라지지 않게 적용
- 지울때는 filter()를 이용해서 해당되는 것만 제거하고 배열을 만들어서 다시 대입

#### weather
- API_KEY를 지금은 지운상태(민감정보)
- https://openweathermap.org/current 에서 회원가입해서 My API key를 변수에 넣어줘야 실행됨.