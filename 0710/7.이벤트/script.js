const btn = document.querySelector('.btn');

// btn.onclick = function() {
//   alert('ㅋㅋㅋㅋ');
// }

// btn.onclick = abc;

// function abc() {
//   alert("gggg")
// }

// addEventListener 함수를 이용해서 이벤트 설정을 함

// 이벤트 종류 : 클릭, 더블클릭, 등등...
// 이벤트핸들러 : 이벤트 발생 시 실행할 코드 -> 함수
// 요소.addEventListener(이벤트종류, 이벤트핸들러)

// 이벤트 삭제
// 요소.removeEventListener(이벤트종류, 이벤트핸들러)

btn.addEventListener( 'click', function() {
  alert('ㅋㅋㅋㅋ');
} )

// 위에 걸어둔 이벤트가 안지워짐
btn.removeEventListener( 'click', function(){
  alert('ㅋㅋㅋㅋ');
})

function handler() {
  alert("이건 지울수 있음");
}

btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);

const btn2 = document.querySelector('.btn2');

// 이벤트 객체
btn2.addEventListener('click', function(e){
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.target);
});