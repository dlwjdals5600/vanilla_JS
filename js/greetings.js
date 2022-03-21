const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
console.log(loginForm)

const Hidden_ClassName = "hidden";
const UserName_Key = "userName";
const UserName_Value = localStorage.getItem(UserName_Key);

function paintGreetings(username){
    // greeting.innerText = `반갑습니다. ${username} 님`;
    greeting.classList.remove(Hidden_ClassName);
}


if(UserName_Value === null){
    // 유저 아이디가 없다면
    loginForm.classList.remove(Hidden_ClassName);
}else{
    // 유저 아이디가 있다면
    paintGreetings(UserName_Value);
}


function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;

    localStorage.setItem(UserName_Key,userName);
    loginForm.classList.add(Hidden_ClassName);
    paintGreetings(userName);
}

loginForm.addEventListener("submit",onLoginSubmit)


