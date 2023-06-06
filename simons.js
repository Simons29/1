// НОМЕР 1
// let text = document.querySelector('p')
// let inp = document.querySelector('input')
// inp.addEventListener('blur', func)
// function func(){                                                            
//     text.textContent = text.textContent + ' ' + inp.value
// }
// НОМЕР 2
// elems = document.querySelectorAll('.abc')
// let text = document.querySelector('p')
// let abc = document.querySelector('#button')
// abc.addEventListener('click', func)
// function func(){                                                             
// let sum = 0;
// for(let elem of elems){
//     sum += +elem.value
// }
// text.textContent = sum
// }
// НОМЕР 3
//  let elem = document.querySelector('input')
//  elem.addEventListener('blur', function(){
//     let arr = elem.value.split('');
//     let sum = 0;
//     for(let num of arr){                                                     
//         sum += +num
//     }
//     elem.value = sum
//  })
// НОМЕР 4
// let inp = document.querySelector('input')
// inp.addEventListener('blur', function(){
//     let arr = inp.value.split(',')
//     let sum = 0;
//     for(let elem of arr){                                                    
//         sum += +elem
//     }
//     let res = sum / arr.length
//     inp.value = res
// })
// НОМЕР 5
// let fam = document.querySelector('#fam')
// let name = document.querySelector('#name')
// let surn = document.querySelector('#surn')
// let otch = document.querySelector('#otch')
// fam.addEventListener('blur', func)
// function func(){
//     let arr = fio.value.split(" ")
//     name.value = arr[0];
//     surn.value = arr[1]
//     otch.value = arr[2]
// }
// НОМЕР 6
// let inp = document.querySelector('input')
// inp.addEventListener('blur', func)
// function func(){
// let arr = inp.value.split(' ')
// let str = ''
// for ( let elem of arr){
//     let elem1 = elem[0].toUpperCase() + elem.slice(1)
//     str += elem1
//     str += " "
// }
// inp.value = str
// }
// НОМЕР 7
// let inp = document.querySelector('input')
// let text = document.querySelector('p')
// inp.addEventListener('blur', func)
// function func(){
// let arr = inp.value.split('')
// let res = arr.length
// console.log(res)
// text.textContent = res
// }
// НОМЕР 8
// let inp = document.querySelector('input')
// inp.addEventListener('blur', function(){
//     let date = inp.value.split('.')
//     let ndate = date.reverse()
//     let res = ndate.join('-')
//     inp.value = res
// })
// НОМЕР 9
// let BOBA = document.querySelector('#BOBA')
// let elem = document.querySelector('#elem')
//  BOBA.addEventListener('click', function(){
//     let text1 = elem.value
//     let arr = text1.split('')
//     let arr2 = arr.reverse();
//     let text2 = arr2.join('')
//     if( text1 == text2){
//         console.log('yes')
//     } else (console.log('no'))
//  })

// НОМЕР 10
// let elem = document.querySelector('input')
// elem.addEventListener('blur', function(){
//     let str = elem.value
//     let a = str.indexOf('3', 0)
//     if(a == '-1'){console.log('no')} else(console.log('yes'))
// })
// НОМЕР 11
// let elems = document.querySelectorAll('p')
// let bgik = document.querySelector('#bgik')

// bgik.addEventListener('click', function(){
//     for(let i =0;  i < elems.length; ){
//         let elem = elems[i++]
//         elem.textContent = elem.textContent + ' ' + i
//     }
// })
// НОМЕР 12
// let as = document.querySelectorAll('a')
// let awe = document.querySelector('#awe')
// awe.addEventListener('click', function(){
//     for(let elem of as){
//         elem.textContent = elem.textContent + "(" + elem.href +")"
//     }
// } )
// НОМЕР 13
// let elems = document.querySelectorAll('a');
// function func() {
//  for (let i = 0; i < elems.length; i++) {
//   if ( (elems[i].startsWith('http://') == true)) {
//     elems[i].textContent += '!';
//   }
//  }
//  }    
// НОМЕР 14
// let elems = document.querySelectorAll('p')
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         elem.textContent = elem.textContent * elem.textContent
//     })
// }
// НОМЕР 15
// let elem = document.querySelector('input')
// elem.addEventListener('blur', func)
// function func() {
//      let dayWeak = ['понеднельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота','восркесенье'];
//     let str = elem.value;
//  let arr = str.split('.');
//  let arr2 = arr.reverse();
//  let str1 = arr2.join(',')
//  let date = new Date(str1);
//  let day = date.getDay();
//  let p = document.getElementById('text');
//  elem.value = dayWeak[day];
// }
// НОМЕР 16
// let elem = document.querySelector('#elem')
// let bob = document.querySelector('#bob')
// let obo = document.querySelector('#obo')

// bob.addEventListener('click', function(){
//     if(elem.value >= 0){
//         elem.value =  +elem.value + 1
//     }
// })
// obo.addEventListener('click', function(){
//         elem.value =  +elem.value - 1
// })
// НОМЕР 17
//  let elem = document.querySelectorAll('p')
//  let itog = document.querySelector('input')
//  for(let part of elem){
//     part.addEventListener('click', function(){
//         itog.value = +itog.value + 1
//     })
//  }
// НОМЕР 18
//  let texts = document.querySelectorAll('div')
// for(let elem of texts){
//     elem.textContent = elem.textContent.slice(0, 10) + '...'
// }
// НОМЕР 19
// let elem = document.querySelector('input')
//  elem.addEventListener('blur', function(){
//     if(+elem.value > 0 & +elem.value < 100){
//     elem.style.color = 'green'
//  } else { elem.style.color = 'red'}})
// НОМЕР 20
// let elem = document.querySelector('#elem')
// let lalala = document.querySelector('#lalala')
// lalala.addEventListener('click', function(){
//     let str = ''
//     let letters = "12345678"
//     for(let i = 0; i < 8; i++){
//         str += letters.charAt(Math.floor(Math.random()*letters.length))
//         elem.value = str
//     }
// })
// НОМЕР 21
// let elem = document.querySelector('#elem')
// let meow = document.querySelector('#meow')

// meow.addEventListener('click', function(){
//     let text2 = ''
//     let text = elem.value
//     for(let i = 0; i < text.length; i++){
//         text2 += text.charAt(Math.floor(Math.random()*text.length))
//                 elem.value = text2
//             }
// })