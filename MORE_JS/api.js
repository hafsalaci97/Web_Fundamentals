//JQuery example:

// $('button').click(function(){
//     console.log('I AM CLICKED');
//     $('button').addClass('style-btn');
//     //do other things here
// });

//otherwise through js it would be:

// function styleBtn(){
//     // let btn = document.getElementById('btn');
//     // btn.style.backgroundColor = 'green';
//     // btn.style.border = '2px solid black';
//     //OR
//     // let styleBtn = document.getElementById('btn').classList.add('style-btn');
    
// }

// get data through jquery with ajax

// $(function(){
//     let $items = $('#items');
//     $.ajax({
//         type: 'GET',
//         url: 'https://reqres.in/api/users',
//         success: function(data){
//             console.log('success', data.data);
//             let items = data.data;
//             $.each(items, function(i, item){
//                 $items.append('<li>email:' + item.email+'</li>');
//             })
//         }
//     });
// });

// fetch('https://reqres.in/api/')
//     .then((res)=>{
//         res.json();
//         if (res.ok){
//             console.log('OK');
//         }
//         else console.log('NOT OK');
//     })
//     .then((res)=>console.log('resolved',res))
//     .catch((err)=>console.log('error',err))