/*const title = document.getElementById("title"); //id로 찾을거면 #title
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(document);
document.title= "I own you now"; */


const title = document.querySelector("#title"); //항상 이 줄은 유지

const CLICKED_CLASS = "clicked";

function changeImage(){

}

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    changeImage();
}


function init(){
    title.addEventListener("click", handleClick);
}

init();



/*function handleResize(){
    console.log("I have been resuzed")
}
window.addEventListener("resize", handleResize); //handleResize 함수 불러내..! 필요할때,,!


function handleClick(){
    title.style.color = "red";
}
title.addEventListener("click", handleClick) */


/* 클릭할때마다 컬러바꾸기
const BASE_COLOR = "peru";
const OTHER_COLOR = "red";
function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color= BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init(); */