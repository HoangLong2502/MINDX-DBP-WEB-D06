if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

let item = [
    {name: "Midnight Mint"},{name: "Mocha Frappuccino"},{name: "Mocha"},{name: "Pink Drink"}
]

function ready() {
    var addItemButton = document.getElementsByClassName('btn-success')
    for (var i = 0; i < addItemButton.length; i++) {
        var button = addItemButton[i]
        button.addEventListener('click', addItemToCartClick)
    }

    var deleteItem = document.getElementsByClassName('uil-multiply')
    for (var i = 0; i < deleteItem.length; i++) {
        var button = deleteItem[i]
        button.addEventListener('click', removeItemClick)

    }

    var quantityInputs = document.getElementsByClassName('quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var listItemAddToCart = document.getElementsByClassName('uil-shopping-cart')[0];
    listItemAddToCart.addEventListener('click', openListItem);
}

function addItemToCartClick(event) {
    event.preventDefault();
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var imgSrc = shopItem.getElementsByClassName('imgSrc')[0].src
    var name = shopItem.getElementsByClassName('item_name')[0].innerText;
    var price = shopItem.getElementsByClassName('item_price')[0].innerText;
    var size = shopItem.getElementsByClassName('form-control')[0].value;
    var ice = shopItem.getElementsByClassName('form-control')[1].value;
    var suger = shopItem.getElementsByClassName('form-control')[2].value;
    
    console.log(name, price, size, ice, suger);

    addItemToCart(imgSrc, name, price, size, ice, suger);

    updateItemQuantity();
    updateTotal()
    
}

function updateItemQuantity() {
    var cartItem = document.getElementsByClassName('cartItem');
    let quantityItem = cartItem.length;
    var cartLogo = document.getElementsByClassName('uil-shopping-cart')[0];
    cartLogo.innerHTML = `
        <div class="quantityCartLogo">${quantityItem}</div>
    `
}

function addItemToCart(imgSrc, name, price, size, ice, suger) {
    var cart = document.getElementsByClassName('cart')[0];
    var cartItem = document.createElement('div');
    cartItem.classList.add('cartItem')

    var cartName = document.getElementsByClassName('titleName')
    var cartSize = document.getElementsByClassName('size')
    var cartIce = document.getElementsByClassName('ice')
    var cartSuger = document.getElementsByClassName('suger')
    for (let index = 0; index < cartName.length; index++) {
        if(cartName[index].innerText == name && cartSize[index].innerText == size && cartIce[index].innerText == ice && cartSuger[index].innerText == suger) {
            console.log(cartName[index].innerText)
            alert("This item is already added to the cart")
            return
        }
        
    }

    console.log(imgSrc)

    var cartContent = `
            <img src ="${imgSrc}">
            <div class="titleName">${name}</div>
            <div class="option">
                <div class="size">${size}</div>
                <div class="ice">${ice}</div>
                <div class="suger">${suger}</div>
            </div>
            <div>
                <input class="quantity", type="number", value="1", name="quantity", required>
            </div>
            <div class="item_price">${price}</div>
            <div class="uil-multiply"></div>

            <select name="name", required>
                <option value="${name}"></option>
            </select>
            <select name="imgSrc", required>
                <option value="${imgSrc}"></option>
            </select>
            <select name="option", required>
                <option value="${size},${ice},${suger}"></option>
            </select>
            <select name="price", required>
                <option value="${price}"></option>
            </select>
        `

    cartItem.innerHTML = cartContent
    cart.append(cartItem)

    cartItem.getElementsByClassName('uil-multiply')[0].addEventListener('click', removeItemClick)
    cartItem.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged)
    
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    console.log("hello")
    updateTotal()
}

function removeItemClick(event) {
    event.preventDefault();
    var button = event.target;
    button.parentElement.remove();
    updateItemQuantity();
    updateTotal();
}

function openListItem(event) {
    event.preventDefault();
    document.querySelector('.cart').classList.toggle('active')
}

function updateTotal() {
    var total = document.getElementsByClassName('cartTotal')[0]
    var cartItem = document.getElementsByClassName('cartItem');
    var totalMoney = 0;
    let array = [];
    for (let index = 0; index < cartItem.length; index++) {
        var name = document.getElementsByClassName('titleName')[index].innerText;
        var option = document.getElementsByClassName('option')[index].innerText;

        var quantity = parseInt(document.getElementsByClassName('quantity')[index].value);
        var cost = document.getElementsByClassName('item_price')[index];
        var money = parseFloat(cost.innerText.replace('$', ''))
        totalMoney = totalMoney + (money * quantity)

        let ItemAdd = {
            nameItem: name,
            optionItem: option,
            quantityItem: quantity,
            costItem: money,
        }

        array.push(ItemAdd);
        console.log(array)
    }

    total.innerHTML = `$ ${Math.round(totalMoney * 100) / 100}
        <select name="total", required>
            <option value="$ ${Math.round(totalMoney * 100) / 100}"></option>
        </select>
    `

    console.log(total, quantity, cost, money)
}








