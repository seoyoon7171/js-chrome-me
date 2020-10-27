const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN= "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text); //saveName
}

function handleSubmit(event){
    event.preventDefault(); //엔터쳐도 안넘어가 event 막기가 1단계
    const currentValue = input.value;
    paintGreeting(currentValue);  //이거하면 입력한 애 {text}로 이용
    saveName(currentValue); //저장실행
    console.log(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);  //submit 이 엔터라는 동작인듯
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;  
}

function loadName(){
    const currentUser =localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName(); // 유저가 없는경우 
    }else{
       paintGreeting(currentUser); //유저가 있는경우
    }
}

function init() {
    loadName();
}

init();