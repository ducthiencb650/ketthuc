var products = [
    {
        id:1,
        images:'image/r1.webp',
        name:"Arrow 3/4",
        price:40000000,
    },
    {
        id:2,
        images:'image/r2.webp',
        name:"Arrow 3/4",
        price:40000000,
    },
    {
        id:3,
        images:'image/r3.webp',
        name:"Arrow 3/4",
        price:30000000,
    },{
        id:4,
        images:'image/r4.webp',
        name:"Arrow 3/4",
        price:45000000,
    },{
        id:5,
        images:'image/5.webp',
        name:"Arrow Fullface",
        price:45000000,
    },{
        id:6,
        images:'image/6.webp',
        name:"Arrow Fullface",
        price:45000000,
    },{
        id:7,
        images:'image/7.webp',
        name:"Arrow Fullface",
        price:45000000,
    },{
        id:8,
        images:'image/8.webp',
        name:"Arrow Fullface",
        price:45000000,
    }
];
function addToCart(idProduct){
    let storeProducts = [];
    let product = products.find(element => element.id == idProduct);
    let obitem = {
        item : product,
        qty: 1
    }
    if(localStorage.getItem('carts')){
        storeProducts = JSON.parse(localStorage.getItem('carts'));
        let findProduct = storeProducts.find(element => element.item.id == idProduct);
        if(findProduct == undefined){
            storeProducts.push(obitem);
            localStorage.setItem('carts',JSON.stringify(storeProducts));
        }else{
            let findIndex = storeProducts.findIndex(element => element.item.id == idProduct);
            storeProducts[findIndex].qty++;
            localStorage.setItem('carts',JSON.stringify(storeProducts));
        }
    }else{
        storeProducts.push(obitem);
        localStorage.setItem('carts',JSON.stringify(storeProducts));
    }
}
function countCart(){
    console.log('count cart');
    if(localStorage.getItem('carts')){
        var count =  JSON.parse(localStorage.getItem('carts'));
        $('.cart-count').html(count.length);
    }else{
        $('.cart-count').html('0');
    }
}
$(function(){
    countCart();
    $('.add-cart').click(function(){
        let id = $(this).attr('data-id');
        addToCart(id); // function thêm sản phẩm vào giỏ
        countCart(); // đếm số lượng sản phẩm khi mua hàng 
    });
});
$('.carousel').carousel({
    interval: 2000
  })