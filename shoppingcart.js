

function increaseitem1(){
    let qtybar = document.getElementById("qty-bar").value;
    qtybar = document.getElementById("qty-bar").value++;    
}

function increaseitem2(){
     let qtybar2 = document.getElementById("qty-bar-2").value;
    qtybar2 = document.getElementById("qty-bar-2").value++;  
}

function increaseitem3(){
     let qtybar3 = document.getElementById("qty-bar-3").value;
    qtybar3 = document.getElementById("qty-bar-3").value++;  
}


function decreaseitem1() {
    let qtybar = document.getElementById("qty-bar").value;
    qtybar = document.getElementById("qty-bar").value--; 
     if (qtybar < 1) {
        alert("Select a qty above 0, otherwise your qty will not be added to cart");
        document.getElementById("qty-bar").value = 1;return;
    }
}

function decreaseitem2() {
    let qtybar2 = document.getElementById("qty-bar-2").value;
    qtybar2 = document.getElementById("qty-bar-2").value--; 
     if (qtybar2 < 1) {
        alert("Select a qty above 0, otherwise your qty will not be added to cart");
         document.getElementById("qty-bar-2").value = 1; return;
    }
}

function decreaseitem3() {
    let qtybar3 = document.getElementById("qty-bar-3").value;
    qtybar3 = document.getElementById("qty-bar-3").value--; 
    if (qtybar3 < 1) {
        alert("Select a qty above 0, otherwise your qty will not be added to cart");
         document.getElementById("qty-bar-3").value = 1; return;  
    }
}





function calctotal() {
    let qty = document.getElementById("qty-bar");
    let qtyvalue = qty.value;
    let price = document.getElementById("price");
    let pricevalue = price.value;
    document.getElementById("total").value = qtyvalue * pricevalue;
}

function calctotal2() {
    let qty = document.getElementById("qty-bar-2");
    let qtyvalue = qty.value;
    let price = document.getElementById("price-2");
    let pricevalue = price.value;
    document.getElementById("total-2").value = qtyvalue * pricevalue;
}

function calctotal3() {
    let qty = document.getElementById("qty-bar-3");
    let qtyvalue = qty.value;
    let price = document.getElementById("price-3");
    let pricevalue = price.value;
    document.getElementById("total-3").value = qtyvalue * pricevalue;
}

function pricetag() {
     let pricetag = document.getElementById("price").readOnly;
    pricetag = "true";
}

function total() {
    let qty = document.getElementById("qty-bar");
    let qtyvalue = qty.value;
    let price = document.getElementById("price");
    let pricevalue = price.value;
    document.getElementById("total").value = qtyvalue * pricevalue;
}

function total2() {
    let qty = document.getElementById("qty-bar-2");
    let qtyvalue = qty.value;
    let price = document.getElementById("price-2");
    let pricevalue = price.value;
    document.getElementById("total-2").value = qtyvalue * pricevalue;
}

function total3() {
    let qty = document.getElementById("qty-bar-3");
    let qtyvalue = qty.value;
    let price = document.getElementById("price-3");
    let pricevalue = price.value;
    document.getElementById("total-3").value = qtyvalue * pricevalue;
}

function items() {
    let qty1 = document.getElementById("qty-bar");
    let qty2 = document.getElementById("qty-bar-2")
    let qty3 = document.getElementById("qty-bar-3")
    document.getElementById("items").value = Number(qty1.value) + Number(qty2.value) + Number(qty3.value);
}

function subtotal() {
    let total1 = document.getElementById("total").value;
    let total2 = document.getElementById("total-2").value;
    let total3 = document.getElementById("total-3").value;
    document.getElementById("subtotal").value = Number(total1)+Number(total2)+Number(total3);
}

function totalamt() {
    let subtotal = document.getElementById("subtotal");
    let discountamt = document.getElementById("discount");
    document.getElementById("totalamt").value = Number(subtotal.value) - Number(discountamt.value);
}


function copytextitem() {
    let discountcode = document.getElementById("dc");
    discountcode.select();
    let copied = navigator.clipboard.writeText(discountcode.value);
    alert("copied!")

}

function copytextitem2() {
     let couponcode = document.getElementById("cc");
    couponcode.select();
    let copied = navigator.clipboard.writeText(couponcode.value);
    alert("copied!")
}