const body = document.querySelector("body");

const IMG_NUMBER = 3 ;

function paintImage(imgNumber){
    const image = new Image();
    image.src=`landscape/${imgNumber+1}.jpg`;
    image.classList.add("bgimage")
    body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; //randomNumber 만들어 
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();

