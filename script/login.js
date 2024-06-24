

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null
function loadPageFun(){
   
    if(loggedInUser){
        window.location.href="index.html"
    }
    console.log("Already logged in redirected to product page")
}

let userData=  JSON.parse(localStorage.getItem("user"))||[]

document.querySelector("form").addEventListener("submit",function(){
   
    event.preventDefault()

    let formElement=document.querySelector("form")
    
    let loginObj={
        email:formElement.email.value,
        password: formElement.password.value,
    }
   
    var filtereduser=userData.filter(function(ele,index){
        if(ele.email===loginObj.email && ele.password===loginObj.password){
            userData[index].status=true
            localStorage.setItem("user",JSON.stringify(userData));
            return ele;
        }
    })
     if(filtereduser.length>0){
        var loginuser={
            name:filtereduser[0].value,
            email: filtereduser[0].email
        }
        localStorage.setItem("loggedInUser",JSON.stringify(loginuser))
        alert("login Successfully")
        window.location.href="index.html"
    }
    else{
        alert("Wrong Password")
    }
})