// hiển thị table product từ cart
function showCart(){
    if(localStorage.getItem('carts')==undefined){
        $('.showcart').html(`
            <tr><td colspan="3" class="tex-center">Giỏ hàng rỗng</td></tr>`
        );
    }else{
        const local = JSON.parse(localStorage.getItem('carts'));
        if(local.lenght==0){
            $('.showcart').html(`
                <tr><td colspan="3" class="tex-center">Giỏ hàng rỗng</td></tr>`
            );
        }else{
            loadFormCarts(local);
        }
    }
}
// tạo table 
function loadFormCarts(carts){
    var html = '';
    console.log(carts);
    carts.forEach((element) =>{
        html+=`
            <tr>
                <td><img width="50px" src="${element.item.images}"</td>
                <td>${element.item.name}</td>
                <td><input class="form-control" type="text" value="${element.qty}"></td>
            </tr>
        `;
    });
    $('.showcart').html(html);
}
function deleteCart(){
    localStorage.removeItem('carts');
}
//hiển thị số lương giỏ hàng khi cick mua hàng
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
    showCart();
    countCart();
    $('.delete-cart').click(function(){
        deleteCart();
        showCart();
        countCart();
    });
});