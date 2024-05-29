document.addEventListener("DOMContentLoaded", function() {
    const cartButtons = document.querySelectorAll(".cart-button");

    cartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const productDiv = event.target.closest(".kadın1, .erkek1, .çocuk1");
            const productImage = productDiv.querySelector("img").src;
            const productPrice = productDiv.querySelector(".price").innerText;

            // Ürün bilgilerini localStorage'a ekleyelim
            const product = {
                image: productImage,
                price: productPrice
            };

            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.push(product);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cart = document.querySelector(".sepet-content");

    // localStorage'dan ürün bilgilerini al
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Her ürün için bir kart öğesi oluştur
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" class="cart-item-image">
            <p class="cart-item-price">${item.price}</p>
            <button class="remove-button">Sepetten Çıkar</button>
        `;

        cart.appendChild(cartItem);

        // Sepetten çıkarma işlevini ekle
        const removeButton = cartItem.querySelector(".remove-button");
        removeButton.addEventListener("click", function() {
            cartItem.remove();
            // localStorage'dan da kaldır
            cartItems = cartItems.filter(cart => cart.image !== item.image);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        });
    });
});
