let menu=document.getElementById('menu')
let list=document.getElementById('list')

const handilClick=()=>{
    list.classList.toggle('active')
}

menu.addEventListener('click',handilClick)


let popup=document.getElementById('popup')
let div=document.getElementById('div')
const handilPopup=()=>{
    div.classList.toggle('popup')

}

popup.addEventListener('click',handilPopup)