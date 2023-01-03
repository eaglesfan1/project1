let btn = $('.animate');

btn.on('click', function(){
    $('#block').animate({
        width: '400px',
        height: '400px',
        marginTop: '100px',
        opacity: '0.1'       
    }, 2000);
})