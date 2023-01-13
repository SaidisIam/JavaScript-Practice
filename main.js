// let el = document.querySelector('#text1')
// console.log(el);
// let newEl = document.createElement('h1')
// newEl.innerHTML = 'new element'

// el.append(newEl)



// let daniel = function(){

// }

// F1()
// let mairam = ()=>{

// }

// let follow = document.querySelector('.styl1')
// console.log(follow);


// function folloF(){
//     alert('!!!')
// }

// follow.onclick = folloF  

// follow.onclick = ()=>{
//     follow.classList.remove('styl1')
// }

// follow.onclick = ()=>{
//     follow.classList.toggle('newClass')
//     if(follow.innerHTML == 'подписаться'){
//         follow.innerHTML = 'вы подписаны'
//     } else {
//         follow.innerHTML = 'подписаться'
//     }  
// }


// let inp = document.querySelector('#inp')
// let btn = document.querySelector('#btn')
// let text = document.querySelector('#text')
// btn.onclick = ()=>{
//     console.log(inp.value);
//     text.innerHTML = inp.value
// }

// task-1
// let text = document.querySelector('#before')
// console.log(text);

// let NewText = document.createElement('h1')
// NewText.innerHTML = 'elment h1'

// text.before(NewText)

// task-2
// let text = document.querySelector('#before')
// console.log(text);

// let NewText = document.createElement('h4')
// NewText.innerHTML = 'elment h4'

// text.after(NewText)

// task-3
let follow = document.querySelector('.FirstClass')
let bd = document.body

follow.onclick = ()=>{
    bd.classList.toggle('style')
    if(follow.innerHTML == 'dark'){
        follow.innerHTML = 'light'
    } else {
        follow.innerHTML = 'dark'
    }
}