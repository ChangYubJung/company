var itemTitle= [];
$('.buy').on('click', function(e) {
    var title = $(e.target).siblings('h5').text();

    if(itemTitle.indexOf(title) < 0){
        itemTitle.push(title);
    }

    var newItemTitle = JSON.stringify(itemTitle);
    localStorage.setItem('cart', newItemTitle);
    console.log(itemTitle);

//     var localStorageItem = JSON.parse(localStorage.getItem('cart'));
//     console.log(localStorageItem);

//     localStorageItem.forEach(function(item){
//     let p = document.createElement('p');
//     p.innerHTML = item;
//     $('.cart-container').append(p);
// })
    
});

var localStorageItem = JSON.parse(localStorage.getItem('cart'));
console.log(localStorageItem);

localStorageItem.forEach(function(item){
    let p = document.createElement('p');
    p.innerHTML = item;
    $('.cart-container').append(p);
});

