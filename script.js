//your JS code here. If required.
//console.log("hey")

const username = document.getElementById("username")

const password = document.getElementById("password")
const checkbox = document.getElementById("checkbox")
const submit = document.getElementById("btn")

if(localStorage.getItem("Username") && localStorage.getItem("Password")) {
    const span = document.getElementById("login");
    const btn = document.createElement("button");
    btn.innerHTML="Login as Existing User";
    btn.setAttribute("id","loginbtn");
     span.appendChild(btn)

     const loginbtn = document.getElementById("loginbtn");
     loginbtn.addEventListener("click",()=>{
        var name = localStorage.getItem("Username")
        alert(`Logged in as ${name}`)
     })
}


checkbox.addEventListener("change",()=>{
    
if(checkbox.checked)
{
    localStorage.setItem("Username",username.value)
    localStorage.setItem("Password",password.value)
}
})

submit.addEventListener("click",()=>{
console.log(username.value)
console.log(password.value)
alert(`Logged in as ${username.value}`)
})
