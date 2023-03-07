/*mousedown (어떤 요소에 마우스버튼 눌렀을 때)
mouseup (어떤 요소에 마우스버튼 뗐을 때)
mousemove (어떤 요소위에서 마우스 이동할 때)*/
var 시작좌표 = 0;
var 누름 = false;
$('.slide-box').on('mousedown', function(e){
    var id = e.target.dataset.id;
    var value = parseInt(e.target.dataset.value);

    시작좌표 = e.clientX;
    누름 = true;

    currentSlide(id, value);
});

function currentSlide(id, value){
    $('.slide-box').eq(id).on('mouseup', function(e){
        누름=false;
        console.log("넘어온 id 값" + id);
        console.log(e.clientX - 시작좌표);

        if(id == 0){
            console.log("id = 0");
            if(e.clientX - 시작좌표 <= -300){
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
            }
            else{
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
            }
        }
        if(id == 1){
            console.log("id = 1");
            if(e.clientX - 시작좌표 <= -300){
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-200vw)');
            }
            else if (e.clientX - 시작좌표 >= 300){
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
            }
            else{
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
            }
        }
        if(id == 2){
            console.log("id = 2");
            if(e.clientX - 시작좌표 >= 300){
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
            }
            else{
                $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-200vw)');
            }
        }
        // 화면 넘길때만 transition이 필요함. 이게 계속있으면 애니메이션이 느릿느릿 이상해짐 그래서 0.5s 뒤에 지우게 만듬
        // setTimeout(function(){}) -> 사용자가 지정한 시간 이후 안에 코드 실행!
        setTimeout(() =>{
            $('.slide-container').css('transition', 'none');
            console.log("지움");
        },500)
    });
    $('.slide-box').eq(id).on('mousemove', function(e){
        // console.log("여긴 무슨 값" + id, e.clientX - 시작좌표);
        if(누름==true ){
            if((e.clientX - 시작좌표) < 0 && id == 0){
                $('.slide-container').css('transform', `translateX(calc(${e.clientX - 시작좌표}px - ${value}vw))`);
            }
            else if(id == 1){
                $('.slide-container').css('transform', `translateX(calc(${e.clientX - 시작좌표}px - ${value}vw))`);
            }
            else if((e.clientX - 시작좌표) > 0 && id == 2){
                $('.slide-container').css('transform', `translateX(calc(${e.clientX - 시작좌표}px - ${value}vw))`);
            }
        }
    });
}