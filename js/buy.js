// Data Obat
let url = 
    "https://63500c77df22c2af7b61ac65.mockapi.io/pemesanan_obat";

    let option = {
        method: "GET",
    };
    
const getDataApi = () => {

    fetch(url, option)
        .then((response) => response.json())
        .then((result) => {
            let obatHTML = document.getElementById("data-obat");

            result.forEach((item, index) => {
                obatHTML.innerHTML += `<div class="product-box">
                <img src="`+item.gambar+`" alt="" class="product-img">
                <h2 class="product-title">`+item.nama_obat+`</h2>
                <span class="price">Rp. `+item.harga+`</span>
                <i class='bx bx-shopping-bag add-cart' onclick='addCartClicked(event)'></i>
                </div>`;
            })

        })
        .catch((error) => console.log(error));
};
getDataApi();

// Cart 
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

//Cart Working
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready(){
    // Remove item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    // console.log(removeCartButtons);
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }

    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    var addCart = document.getElementsByClassName("add-cart")
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    
    // Buy button work
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

// Buy button
function buyButtonClicked(){
    alert("Pesanan Anda diproses");
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    // updateTotal();
    window.location.href = "./riwayat.html";
}

// Remove item from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

// Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title) {
        alert("Anda telah menambahkan item ini ke troli");
        return;
        }
    }
    var cartBoxContent = `
                    <img src="${productImg}" alt="" class="cart-img">
                    <div class="detail-box">
                           <div class="cart-product-title">${title}</div>
                           <div class="cart-price">${price}</div>
                           <input type="number" value="1" class="cart-quantity">
                    </div>
                    <!-- Remove Cart -->
                    <i class='bx bxs-trash cart-remove'></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}
                    
// Update total
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var dataPem = [];
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var title = cartBox.getElementsByClassName("cart-product-title")[0]
        var priceElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var price = parseFloat(priceElement.innerText.replace("Rp.", ""));
        var quantity = quantityElement.value;
        var dataPembelian = {
            nama_obat: title.innerHTML,
            harga_obat: priceElement.innerText,
            jumlah: quantity
        }
        dataPem.push(dataPembelian);
        total = (total + price * quantity);
    }
    console.log(dataPem);
    localStorage.setItem('pembelian', JSON.stringify(dataPem));
    // var dataPem = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];
    // console.dir(localStorage.getItem('pembelian'));

        // // Jika harga nya koma/tidak genap
        // total = Math.round(total * 100) / 100;
        
        document.getElementsByClassName("total-price")[0].innerText = "Rp." + total;
}