let showBtn = $('.showBlock');
let hideBtn = $('.hideBlock');
let block = $('#block');
let toggle = $('.toggle-btn');

// showBtn.on('click', function(){    
//     block.show();
// })

// hideBtn.on('click', function(){
//     block.hide();
// })

// toggle.on('click', function(){
//     block.toggle();
// })


// showBtn.on('click', function(){
//     block.fadeIn();
// })

// hideBtn.on('click', function(){
//     block.fadeOut();
// })

// toggle.on('click', function(){
//     block.fadeToggle();
// })

// showBtn.on('click', function(){
//     block.slideDown();
// })

// hideBtn.on('click', function(){
//     block.slideUp();
// })

toggle.on('click', function(){
    block.slideToggle();
})



