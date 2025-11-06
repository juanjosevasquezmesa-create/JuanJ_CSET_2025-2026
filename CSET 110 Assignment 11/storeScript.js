// const { createElement } = require("react");

const shopBtnArray = document.querySelectorAll('.shop-item-button'); //this needs the '.' to know its looking for a class
//this makes an array with all of the ADD TO CART buttons

const cartTotal = document.getElementsByClassName("cart-total-price")[0];

const shopBtnImageArray = document.querySelectorAll(".shop-item-image");

const shopItems = document.querySelectorAll(".shop-item");

const itemDisplay = document.getElementsByClassName("cart-items")[0];

const purchase = document.getElementsByClassName("btn-purchase")[0];

const itemTable = [["Album 1", 12.99], ["Album 2", 14.99], ["Album 3", 9.99], ["Album 4", 19.99], ["T-Shirt", 19.99], ["Coffee Cup", 6.99]];

itemDisplay.innerHTML = "";
// itemDisplay.style.display = "none";

let total = 0;

let indexCheck = [true, true, true, true, true, true];
//[true, true, true, true, true, true]

let counter = 0;

let priceIndex = [null, null, null, null, null, null];

shopBtnArray.forEach(element => {
const num = counter;    

    //actionEventListener for each shop button element (each button)
    element.addEventListener('click', function() {
        console.log(num);
        console.log(shopBtnImageArray[num].src);
        
        
        let cartRow = document.createElement("div");
        cartRow.className = "cart-row";
        cartRow.id = String(num);

        let cartColumn = document.createElement("div");
        cartColumn.className = "cart-item cart-column";

        let itemImage = document.createElement("img");
        itemImage.className = "cart-item-image";
        itemImage.src = shopBtnImageArray[num].src;
        itemImage.height = "100";
        itemImage.width = "100";

        let itemTitle = document.createElement("span");
        itemTitle.className = "cart-item-title";
        itemTitle.innerText = itemTable[num][0];

        cartColumn.appendChild(itemImage);
        cartColumn.appendChild(itemTitle);

        let itemPrice = document.createElement("span");//
        itemPrice.className = "cart-price cart-column";
        itemPrice.innerText = itemTable[num][1];

        let cartQuantity = document.createElement("div");//
        cartQuantity.className = "cart-quantity cart-column";

        let quantityInput = document.createElement("input");
        quantityInput.className = "cart-quantity-input";
        quantityInput.type = "number";
        quantityInput.value = "1";
        quantityInput.min = "0"

        priceIndex[num] = Number(quantityInput.value) * itemTable[num][1];
        total = priceIndex.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0);
        total = (Math.floor(total*100)/100);
        cartTotal.innerText = `\$${total}`;

        quantityInput.addEventListener('change', function() {

            priceIndex[num] = Number(quantityInput.value) * itemTable[num][1];
            total = priceIndex.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0);
            total = (Math.floor(total*100)/100);
            cartTotal.innerText = `\$${total}`;
            
        });
        
        let btnDanger = document.createElement("button");
        btnDanger.className = "btn btn-danger";
        btnDanger.type = "button";
        btnDanger.innerText = "REMOVE";

        btnDanger.addEventListener('click', function () {
            priceIndex[num] = 0;
            console.log(priceIndex);
            
            total = priceIndex.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0);
            total = (Math.floor(total*100)/100);
            cartTotal.innerText = `\$${total}`;
            let item = document.getElementById(String(num));
            item.remove();
            indexCheck[num] = true;
            
        });

        cartQuantity.appendChild(quantityInput);
        cartQuantity.appendChild(btnDanger);
        
        cartRow.appendChild(cartColumn);
        cartRow.appendChild(itemPrice);
        cartRow.appendChild(cartQuantity)

        if (indexCheck[num]) {
            itemDisplay.appendChild(cartRow);
            indexCheck[num] = false;
        } else {
            alert("You already have an item in the cart!");
        }

        
    });

    counter++;
    
});

purchase.addEventListener('click', function () {
            alert(`Purchase has been completed! Total was \$${total}.`)

            itemDisplay.innerHTML = "";
            indexCheck = [true, true, true, true, true, true];
            priceIndex = [null, null, null, null, null, null];

            total = priceIndex.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0);
            total = (Math.floor(total*100)/100);
            cartTotal.innerText = `\$${total}`;
        });
    