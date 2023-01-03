// let btn = $('button');
// let block = $('.block');

// btn.on('click', function(){
//     block.toggleClass('white-text');
// })

//JS
// let el = document.createElement('li');
// el.className = 'red';
// el.textContent = 'Item 4';
// let list = document.querySelector('ul');
// list.appendChild(el);

// JQuery
$('<li></li>')
.addClass('red')
.text('Item 4')
.prependTo($('ul'));