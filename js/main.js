//check localstorage for previous cart items
var cachedCart = localStorage.getItem('savedCart');
function checkTheCache() {
	if (cachedCart != null) {
		var xyz = document.querySelector('.cartBox');
		xyz.innerHTML = cachedCart;
		var totalItems = document.querySelector('.total-items');
		var lineCount = document.querySelectorAll('.cartLine');
		totalItems.innerText = lineCount.length;
	}
}
checkTheCache();


//remove from cart
var removeBTN = document.querySelectorAll('.cartDLT');
for (var i = 0; i < removeBTN.length; i++) {
	var button = removeBTN[i]
	button.addEventListener("click", deleteThisItem)
	function deleteThisItem(event) {
		var buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()
		var cachedCart = $('.cartBox').html().trim();
		localStorage.setItem('savedCart', cachedCart);
		var totalItems = document.querySelector('.total-items');
		var lineCount = document.querySelectorAll('.cartLine');
		totalItems.innerText = lineCount.length;
		

	};
};




//add to cart
var addBTN = document.querySelectorAll('.addToCart');
for (var i = 0; i < addBTN.length; i++) {
	var button = addBTN[i]
	button.addEventListener("click", addToMyCart)
}
function addToMyCart(event) {
		var buttonClicked = event.target
		var shopItem = buttonClicked.parentElement
		var title = shopItem.querySelectorAll('.prodTitle')[0].innerText
		var price = shopItem.querySelectorAll('.itemPrice')[0].innerText
		var prodIMG = shopItem.querySelectorAll('.itemPic')[0].src
		var prodQuantity = shopItem.querySelectorAll('.itemPic')[0].value
		var itemVal = shopItem.querySelectorAll('.itemPrice')[0].getAttribute('value')
		addItemToMyCart(title, price, prodIMG, prodQuantity, itemVal)
}
function addItemToMyCart(title, price, prodIMG, prodQuantity, itemVal) {
	var cartLine = document.createElement('div')
	cartLine.classList.add('cartLine');
	var cartItems = document.querySelectorAll('.cartBox')[0]
	var cartLineContents = `
		  <div class="picContainer">
		  	<img src="${prodIMG}">
		  </div>
		  <div class="cartPrice" value="${itemVal}">
		  	${price}
		  </div>
		  <div class="deleteCartItem">
		    <button class="cartDLT" onclick="resetTheTotal();">Remove</button>
		  </div>`
	cartLine.innerHTML = cartLineContents
	cartItems.appendChild(cartLine)

	alert('Item Has Been Added To Cart');

	var delResetTotal = document.querySelector('.total-cost');
	delResetTotal.innerText = "";

	//save cart items to localstorage
	var cachedCart = $('.cartBox').html().trim();
	localStorage.setItem('savedCart', cachedCart);
	var totalItems = document.querySelector('.total-items');
	var lineCount = document.querySelectorAll('.cartLine');
	totalItems.innerText = lineCount.length;

	//remove from cart
	var removeBTN = document.querySelectorAll('.cartDLT');
	for (var i = 0; i < removeBTN.length; i++) {
		var button = removeBTN[i]
		button.addEventListener("click", deleteThisItem)
		function deleteThisItem(event) {
			var buttonClicked = event.target
			buttonClicked.parentElement.parentElement.remove()
			var cachedCart = $('.cartBox').html().trim();
			localStorage.setItem('savedCart', cachedCart);
			var totalItems = document.querySelector('.total-items');
			var lineCount = document.querySelectorAll('.cartLine');
			totalItems.innerText = lineCount.length;
		}
	}
};



//Button to calculate subtotal
var calcBTN = document.querySelector('.estimateBTN');
var quantityCheck = document.querySelector('.total-items').innerText;
var s2n = parseInt(quantityCheck);
calcBTN.addEventListener("click", recalculateMyTotal)
function recalculateMyTotal() {
		var itemPrices = document.querySelectorAll('.cartPrice');	
		var priceArray = [0];
		for (var i = 0; i < itemPrices.length; i++) {
			var subTotaled = itemPrices[i].getAttribute('value');
			priceArray.push(parseInt(subTotaled));			
		}
		var sum1 = priceArray.reduce((total1, amount1) => total1 + amount1)
		//add shipping price to total
		if (document.querySelectorAll('.cartLine').length > 0) {
			if (document.querySelectorAll('.selectedMethod').length > 0) {
				var shippingMethod = document.querySelector('.selectedMethod').nextElementSibling;
				var shipNum = parseInt(shippingMethod.value);
				var totalPrice = document.querySelector('.total-cost');
				totalPrice.innerText = sum1 + shipNum;
				if (true) {

				}
			} else {
				alert('Please select a shipping method!');
			}
		} else {
			alert('Your shopping cart is empty!');
		}
			
		
};



//Shipping Estimate Selector (changes border of selected item)
var x1 = document.querySelector('#standard');
var x2 = document.querySelector('#standardS');

var y1 = document.querySelector('#expedited');
var y2 = document.querySelector('#expeditedS');

x1.addEventListener("click", shippingSelect);
y1.addEventListener("click", shippingSelect);

function shippingSelect() {
	if (x1.checked) {
		x2.classList.add("selectedMethod");
		y2.classList.remove("selectedMethod");
	} else if (y1.checked) {
		y2.classList.add("selectedMethod");
		x2.classList.remove("selectedMethod");
	};
};


function resetTheTotal() {
	var delResetTotal = document.querySelector('.total-cost');
	delResetTotal.innerText = "";
}



//Display alert for search button
var searchBTN = document.querySelector('.btnSearch');
searchBTN.addEventListener("click", function(event){
	event.preventDefault();
	alert('This store currently only has two categories. The search function will be added at a later time. Please select "Shop" at the top of the page to view our inventory.');
});

//Display alerts for account login
var signIn = document.querySelector('#login');
signIn.addEventListener("click", function(event){
	event.preventDefault();
	alert('Thanks for trying out my test site! Unfortunately, no account will be created or saved as this is a mock website. ');
});

var signIn2 = document.querySelector('#login2');
signIn2.addEventListener("click", function(event){
	event.preventDefault();
	alert('Thanks for trying out my test site! Unfortunately, no account will be created or saved as this is a mock website. ');
});

var pwReset = document.querySelector('.pwReset');
pwReset.addEventListener("click", function(event){
	// event.preventDefault();
	alert("Forgot your password, huh? Well good news! This site isn't real and neither is your account!");
});