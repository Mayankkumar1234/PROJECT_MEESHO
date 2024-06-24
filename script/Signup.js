let userData=  JSON.parse(localStorage.getItem("user"))||[]
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();

var formElement=document.querySelector("form")

var signUpObj={
        name:formElement.name.value,
        dob:formElement.dob.value,
        email:formElement.email.value,
        password:formElement.password.value,
        status:false
    };
    
    userData.push(signUpObj)
    localStorage.setItem("user",JSON.stringify(userData))
    formElement.reset()

    alert("User has registered successfully.")
       window.location.href="login.html";
    
})