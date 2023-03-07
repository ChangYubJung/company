$(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    var y = (-1/500) * scroll +(115/50)
    


    var y = (-1/500) * scroll +(115/50);
    $('.card-box').eq(0).css('opacity', y, 'size');

    var z = (-1/5000) *scroll + 565/500;
    $('.card-box').eq(0).css('transform', `scale( ${z} )`);
});