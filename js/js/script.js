// let btn = $('button');

// // btn.on('click dblclick mouseover', function(){
// //     console.log('Have a nice day!');
// // })

// btn.click(greeting);
// btn.dblclick(greeting);
// btn.mouseover(greeting);

// function greeting(){
//     console.log('Have a nice day!');
// }

// let val1 = $('input[type=text]').val();
// console.log(val1);

// let val2 = $('input[type=range]').val();
// console.log(val2);

// $('input[type=text]').on('change', function(){
//     $('p').text($(this).val());
// })

let inp1 = $('.inp-1');
let inp2 = $('.inp-2');

inp1.on('change', function(){
    inp2.val(inp1.val())
})