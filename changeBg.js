const bed = document.querySelector("body");
const buttons = document.querySelector(".js-changeBg");

const IMG_NUM = 3 ;

FOLDERS= ["landscape", "moon", "flower", "animal"]

//function getFolder(){
    //const folder_N= Math.floor(Math.random() * FOLDERS.length);
    //const folder= FOLDERS[folder_N] 
    //return folder;


function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; //randomNumber 만들어 
}

function paintImage(imgNumber, getName){ //final 이미지로드
    const image2 = new Image();
    image2.src=`${getName}/${imgNumber+1}.jpg`;
    image2.classList.add("bgimage");
    bed.append(image2); //..!
}


function getFolder(event){ //2
    ss=event.target;
    const randomFolder = ss.innerText; //3
    const randomNumber = getRandom();
    paintImage(randomNumber, randomFolder);
    console.log(randomNumber, randomFolder);}

function changeBackground(){
    buttons.addEventListener("click", getFolder); //1
}

changeBackground();