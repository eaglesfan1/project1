let btn = $('.btn');
let block = $('#block');

btn.on('click', function(){
	block.css('width', '400px');
	block.css('background-color', '#ffff00');

	let b2 = $('.block-2');
	let style = {
		width: block.css('width'),
		height: block.css('height'),
		backgroundColor: block.css('background-color')
	}
	b2.css(style);

	// b2.css('width', block.css('width'));
	// b2.css('height', block.css('height'));
	// b2.css('background-color', block.css('background-color'));
	
})