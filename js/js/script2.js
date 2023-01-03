// let inp = $('input');

// // inp.on('keyup', function(){
// //     console.log('The key is up');
// // })
// // inp.on('keydown', function(){
// //     console.log('The key is down');
// // })

// inp.on('keypress', function(e){
//     if(e.which === 13 && e.shiftKey){
//         console.log('The enter key is pressed')
//     }
// })

let textInp = $('input[type=text]');
let fileInp = $('input[type=file]');
let form = $('form');

textInp.on('focus', function(){
    $(this).addClass('focused');
})

textInp.on('blur', function(){
    $(this).removeClass('focused');
})

fileInp.on('change', function(){
    console.log('A file has been chosen');
})

form.on('submit', function(){
    alert('Your message has been sent');
})