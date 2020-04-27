//Display prompt for email buttons
let notice = document.querySelector('.emailPrompt');
notice.addEventListener("click", popNotice);

let notice2 = document.querySelector('.emailPrompt2');
notice2.addEventListener("click", popNotice);

function popNotice() {
	alert('Normally, you would be sent to your email client, however this is just a mock website.');
};
