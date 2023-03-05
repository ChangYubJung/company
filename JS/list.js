var products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
];
// products사본
var copyProducts = Object.assign([], products);
console.log(copyProducts);

for(let i = 0 ; i < 3 ; i++){
    list(i);
    console.log(i);
}
function list(구멍){
    console.log(구멍);
    $('.card-body h5').eq(구멍).html(products[구멍].title);
    $('.card-body p').eq(구멍).html(products[구멍].price);
}

// list2.html
function 상품구성(data, num){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let btn = document.createElement('button');


    div.classList.add('col-sm-4');
    img.src = "https://via.placeholder.com/600";
    img.classList.add('w-100');
    btn.classList.add('buy');


    h5.innerHTML = data[num].title;
    p.innerHTML = data[num].price;
    btn.innerHTML = '구매';

    
    div.append(img ,h5, p, btn);
    $('.row').append(div);
}

$('.row').html(' ');
var btnClickCount = 0;
for(let i = 0 ; i < products.length ; i++){
    상품구성(products,i);
}
$('#more').on('click', function(){
    if(btnClickCount == 0){
        $.get('https://codingapple1.github.io/js/more1.json').done(function(data){
            console.log(data);
            for(let i = 0 ; i < data.length ; i++){
                상품구성(data, i);
            }
        });
        btnClickCount++;
     }else if (btnClickCount == 1){
        $.get('https://codingapple1.github.io/js/more2.json').done(function(data){
            console.log(data);
            for(let i = 0 ; i < data.length ; i++){
                상품구성(data, i);
            }
            btnClickCount++;
            $('#more').html('추가상품없음');
        });
     }else{
        $('#more').css('disabled', true);
     }
});

$('#pricesort').on('click', function(){
    products.sort(function(a, b){
        return a.price-b.price;
    });
    $('.row').html('');
    for(let i = 0 ; i < products.length ; i++){
        상품구성(products,i);
    }
});

// 숙제1.  상품명 다나가순 정렬
$('#revers').on('click', function(){
    products.sort(function(a,b){
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        if (a.title === b.title) return 0; 
    });
    $('.row').html('');
    for(let i = 0 ; i < products.length ; i++){
        상품구성(products,i);
    }
});
// 숙제2. 6만원 이하 상품만 보여주기
$('#6lower').on('click', function(){
    var newProducts = products.filter(function(a){
        return a.price <= 60000;
    });
    $('.row').html('');
    for(let i = 0 ; i < newProducts.length ; i++){
        상품구성(newProducts,i);
    }
});
// 응용1. 가나다순 정렬버튼
$('#textsort').on('click', function(){
    products.sort(function(a,b){
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        if(a.title === b.title) return 0
    });
    $('.row').html('');
    for(let i = 0 ; i < products.length ; i++){
        상품구성(products,i);
    }
});
// 응용2. 입력받은 값으로 필터
$('#filter').on('change', function(){
    var price = parseInt($('#filter').val());

    console.log(price);
    var newProducts = products.filter(function(a){
        return a.price <= $('#filter').val();
    });
    $('.row').html('');
    for(let i = 0 ; i < newProducts.length ; i++){
        상품구성(newProducts,i);
    }
});
// 응용3. 원래 순서대로 되돌리는 기능
$('#origin').on('click', function(){
    $('.row').html('');
    console.log(copyProducts.length);
    for(let i = 0 ; i < copyProducts.length ; i++){
        상품구성(copyProducts,i);
    }
});


// GET/POST 요청하면 브라우저가 새로고침됨.
// ajax -> 새로고침없이 GET,POST 요청하는 기능.
// ajax로 GET요청.
$.get('https://codingapple1.github.io/price.json').done(function(data){
    console.log(data);
    console.log(data.price);
}).fail(function(){
    console.log('fail');
});
/*ajax로 POST요청.
$.post('http://127.0.0.1:5500/JS/list.html', {name : 'JUNG'}).done(function(data){
    console.log(data);
});*/

/*var array = ['a', 'c', 'b', 'e', 'd', 'f'];
console.log(array);
console.log(array.sort());
문자 역순정렬
console.log(array.sort(function(a, b){
    if(a < b){
        return 1;
    }
    if(a > b){
        return -1;
    }
    if(a===b){
        return 0;
    }
}));*/

/* Array정렬하는 법
var 어레이 = [7,3,5,2,40]
Array.sort(); -> 문자순 정렬(가 나 다 / a b c 순서);
Array.sort(function(a, b){

}
Array.sort(function(a,b){
    return a - b; -> 숫자 오름차순정렬
    ruetnr b - a; -> 숫자 내림차순정렬
})
작동원리
1. a, b는 Array안의 자료
2. return 오른쪽이 양수면 a를 오른쪽으로
3. return 오른쪽이 음수면 b를 오른쪽으로
*/

/*array 자료 원하는 것만 필터하려면 .filter()
var 새어레이 = 어레이.filter(function(a){
    return a < 4 -> 4미만인 자료만 남김.
});

sort는 원본 번형 O / filter는 원복 변형 X

array 자료 전부 변형하려면 .map()
var 새어레이 = 어레이.map(function(a){
    return a * 4;
});
*/

/* 로컬스토리지 다루는 법.
localStroage-> 이름(key):값(value)형태로 저장가능, 용량은 5MB 문자/숫자만 저장가능, 사이트 재접속해도 유지됨.
sessionStorage -> 사이트나가면 자동으로 삭제됨.
<사용법>
localStorage.setItem()
localStorage.removeItem()
localStorage.setItem('key1', 'value1');
localStorage.removeItem('key1', 'value1');*/

/* array, object -> JSON 으로 바꾸면 localStorage에 저장가능.
var array = [1,2,3]; 
var newArr = JSON.stringify(array);
localStorage.setItem('name',newArr);
var 꺼낸거 = localStorage.getItem('name');
console.log(JSON.parse(꺼낸거));*/

