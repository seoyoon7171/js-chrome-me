const toDoForm =document.querySelector(".js-toDOform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


let toDos = [];  //값이 바뀌어



function deleteToDo(event){
    const bn = event.target;
    const li = bn.parentNode;
    toDoList.removeChild(li); // 클릭한애 지움 
    //console.dir(event.target.parentNode); //dir >>father 찾을 수 있어
    //console.log(event);
    //console.log(event.target.parentNode);
    const cleanToDos = toDos.filter(function(toDo){ //filter!
        return toDo.id !== parseInt(li.id);
    });
    toDos= cleanToDos //업데이트하면 남은 li id 순서대로 조정
    saveToDos();
}

const CLICKED_CL = "line-through"

function cancelToDo(event){
    span=event.target;
    ss=span.parentNode.parentNode;
    console.log(ss);
    current = ss.style.textDecorationLine;
    if (current !== CLICKED_CL) {
        ss.style.textDecorationLine= CLICKED_CL
        
    } else {
        ss.style.textDecorationLine= ''
    }
}


function saveToDos(){ //toDos 가져와서 로컬에 저장 *근데 string으로 쓰려고해
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //그래서 자바스크립트 object를 다 string으로 바꿔줌
}

function paintToDo(text){
    console.log(text);  // 여기처 text는 currentValue/ event submit으로 받은값
    const li= document.createElement("li");
    const delButton = document.createElement("button");
    const span = document.createElement("span");
    const cancelButton = document.createElement("label");

    const newId = toDos.length +1;
    delButton.innerText = "❌"; // (window)+(.)

    cancelButton.innerHTML = `<input id="ip-text" type="checkbox"></input>`;
    cancelButton.addEventListener("click", cancelToDo);
    delButton.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(delButton);
    li.appendChild(span);
    li.appendChild(cancelButton);

    li.id=newId; //li 에 Id 입력
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    li.style.listStyle = "none";
    span.style.fontSize ="12px";
    delButton.style.fontSize = "1px";
    delButton.style.padding = "0";
    delButton.style.margin="0"
    delButton.style.opacity="0.7";
    toDos.push(toDoObj);  //push 쓰면 array toDos에 toDoObj 넣어줄 수 있음
    saveToDos(); //push하고 넣어
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value; //toDoForm(HTML으로부터)의 값을 불러와 
    paintToDo(currentValue); //html에 리스트 삽입하는 함수 호출
    toDoInput.value=""; //엔터치면 다시 삭제
}



function loadToDos(){ //예전에 썼던걸 local storage에 담아뒀다가 다시꺼냄.
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){ 
        //console.log(loadedToDos); //근데string으로 불러와져
        const parsedToDos = JSON.parse(loadedToDos); //이쁘게 가져오려고 바꿈.
        // console.log(parsedToDos);
        //array는 forEach라는걸 가짐.array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜줌)
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
            }); //forEach 때문에 각각의 parsedToDos에 대해paintToDo 함수 호출
    }    
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();