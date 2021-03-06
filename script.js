
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let myImg = document.querySelector(".myImg img")
let input = document.querySelector(".inputValue input")

let currentEffect




btn1.addEventListener("click", () =>{
   blur()
})
btn2.addEventListener("click", () =>{
  sepiaEffect()
})
btn3.addEventListener("click", () =>{
    invertEffect()
})


input.addEventListener("input", () =>{
    if(currentEffect==="blur") blur()

    if(currentEffect==="sepia") sepiaEffect()

    if(currentEffect==="invert") invertEffect()


})

function generateFilter(){

    myImg.style.filter = `blur(${input.value}%)`
    currentEffect="blur"
}

generateFilter()
function sepiaEffect(){

    myImg.style.filter = `sepia(${input.value}%)`
    currentEffect="sepia"
}

sepiaEffect()



function invertEffect(){

    myImg.style.filter = `invert(${input.value}%)`
    currentEffect="invert"
}

invertEffect()





