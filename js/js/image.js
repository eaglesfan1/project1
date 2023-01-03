let btn = $('button');

btn.on('click', function(){
    let b1 = $('.block-1');
    b1.attr('class', 'circle');

    let b2 = $('.block-2');
    b2.attr('class', b1.attr('class'));
})