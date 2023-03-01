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
const parent = document.getElementsByClassName('list')[0];
console.log(parent.childElementCount);


// jquery로 같은 class명의 갯수를 찾아도됨.
var count  = $('.tab-button').length;
// 반복문 안에 변수는 let으로 만들자.
// for(let i = 0 ; i < count; i++){
//     $('.tab-button').eq(i).on('click', function () {
//         탭열기(i);
//     });
// }

// 탭기능 다르게 만들기 -> 이벤트리스너 1개만 쓰기
$('.list').on('click', function(e){
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