// $('#tab-btn-1').on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');

//     $('#tab-btn-1').addClass('orange');
//     $('#content-1').addClass('show');
// });
// $('#tab-btn-2').on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');

//     $('#tab-btn-2').addClass('orange');
//     $('#content-2').addClass('show');
// });
// $('#tab-btn-3').on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
    
//     $('#tab-btn-3').addClass('orange');
//     $('#content-3').addClass('show');
// });


/* childElement 쓸때 class로 하려면 인덱싱 해야 작동.
 id 값은 고유해서 인덱싱 불필요.*/
// const parent = document.getElementsByClassName('list')[0];
// console.log(parent.childElementCount);


// jquery로 같은 class명의 갯수를 찾아도됨.
var count  = $('.tab-button').length;
// 반복문 안에 변수는 let으로 만들자.
// for(let i = 0 ; i < count; i++){
//     $('.tab-button').eq(i).on('click', function () {
//         탭열기(i);
//     });
// }

// 탭기능 다르게 만들기 -> 이벤트리스너 1개만 쓰기
$('.tab-button').on('click', function(e){
    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0);
    // }

    // 이렇게 하면 if 여러개 안 만들고 한줄로 가능!
    // 셀렉터.dataset.자료이름 하면 숨겼던 자료 출력.
    탭열기(e.target.dataset.id);
});

function 탭열기(구멍){
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show');
    $('.tab-button').eq(구멍).addClass('orange');
}

// Array / 자료간 순서가 존재. / 자료간 정렬 및 slice 가능.
var car = ['소나타', 50000, 'white']; 
// Object Key Value 형태로 데이터 저장. 순서개념이 없음.
var car2 = {name: '소나타', price: [50000, 3000, 4000],
 color: 'white'}
console.log(car2.name);

$('.title').html("상품명" + " " + car2.name);
$('.price').html("가격" + " " + car2.price[0]);

// 숙제
var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];

for(let i = 0 ; i < 3 ; i++){
    list(i);
    console.log(i);
}
function list(구멍){
    console.log(구멍);
    $('.card-body h5').eq(구멍).html(products[구멍].title);
    $('.card-body p').eq(구멍).html(products[구멍].price);
}

/*1. 문자 중간에 엔터키 칠 수 있음

2. 중간에 ${ 변수명 } 문법을 이용가능함

${ } 이건 문자안에 변수넣어주는 간단한 문법입니다.

일반 따옴표안에선 사용불가능합니다. */

/*스크립트 안에 코드는 페이지 로드시 1회시 실행됨.
그래서 이벤트 발생때마다 코드 실행하기 위해서는 이벤트리스너를 활용*/

// select는 input이랑 같은 그래서 input 이벤트 발생.

var pants = [28, 30, 32];
var shirt = [95, 100 ,105];

$('.form-select').eq(0).on('input', function(){
    var value = $('.form-select').eq(0).val();
    if(value == "셔츠"){
        $('.form-select').eq(1).removeClass('hide');
        // var 템플릿 = `<option>95</option>
        // <option>100</option>`
        // $('.form-select').eq(1).html(템플릿);
        $('.form-select').eq(1).html('');
        shirt.forEach(function(data){
            $('.form-select').eq(1).append(`<option>${data}</option>`);
        });
    }else if(value == "바지"){
        $('.form-select').eq(1).removeClass('hide');
        $('.form-select').eq(1).html('');
        // Array 에 붙일 수 있는 forEach 반복문.
        // 콜백함수 안에 변수 data안에 Array안에 값이 들어가 있음.
        // forEach안에 파라미터2개 생성가능 첫째는 데이터, 둘째는 0부터 1씩증가하는 정수.
        pants.forEach(function(data){
            $('.form-select').eq(1).append(`<option>${data}</option>`);
        });
    }
    else {
        $('.form-select').eq(1).addClass('hide');
    }
});
var obj = {name: 'kim', age: 20};
// Object 자료 갯수만큼 반복문 돌리는방법
for (var key in obj){
    console.log(key);
    console.log(obj[key]);
}

// 자바스크립트로 html 생성법 1
// var a = document.createElement('p');
// a.innerHTML = 'hi';
// document.querySelector('#test').appendChild(a);

// 생성법 2 insertAdjacentHTML, append 둘다 추가해주는 문법임.
var 템플릿 = '<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
$('#test').append(템플릿);

/*그냥 함수와 arrow function의 기능차이는 하나가 있는데
함수 안에서 this를 써야할 경우 
- 그냥 함수는 함수 안에서 this를 알맞게 재정의해줍니다.
- arrow function은 함수 안에서 this를 재정의해주지 않고 바깥에 있던 this를 그대로 씁니다.
그래서 이벤트리스너 콜백함수안에서 this를 써야하면 arrow function 쓰면 의도와 다르게 동작할 수도 있습니다.
그런데선 쓰지말자. */ 

// array, for 반복문 실력향상 과제.

var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기 (구멍){
    for(let i = 0 ; i < 출석부.length ; i++){
        if(출석부[i] == 구멍){
            console.log('있어요');
        }
    }
}

이름찾기('철수');
이름찾기('명수');

for(let i=2 ; i<10 ; i++){
    for(let j = 1 ; j < 10 ; j++){
        console.log(i*j);
    }
}

function 평균비교(array, ave){
    var sum = 0;
    for(let i = 0 ; i < array.length ; i++){
        sum += array[i];
    }
    var totalAve = sum/array.length;
    if(totalAve > ave){
        console.log(`평균보다${totalAve-ave}점이 떨어짐 재수추천`);
    }else{
        console.log(`평균보다${ave-totalAve}점이 오름`);
    }
}

평균비교([10,20,30,40,50], 40);
평균비교([40,40,40], 20);
