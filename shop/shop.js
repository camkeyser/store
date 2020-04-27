// Pricing fix (missing $)
var priceText = document.querySelectorAll('.itemPrice');
for (var i = 0; i <= priceText.length - 1; i++) {
	priceText[i].innerText = "$" + priceText[i].innerText;
}