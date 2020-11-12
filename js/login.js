function formvalidation(){
    var email=document.getElementById("email")
    var password=document.getElementById('pass');
     if(email.value.trim()==''){
        alert('Email must be filles out')
        return false
    }
    else if(password.value.trim()==''){
        alert('Password must be filled out')
        return false;
    }
    else{

       alert("Welcome To X-Green Garden");
        return true;
    }
}


function validationEmail(){
    var email=document.getElementById("email")
    var emailVal=email.value
    var pattern=/^[A-Za-z0-9.]{2,}@[a-z]{2,}[.]{1}[a-z]{2,3}[.]{0,1}[a-z]{0,3}$/
    if(pattern.test(emailVal))
    {
        email.style.backgroundColor='green'
    }
    else
    {
        email.style.backgroundColor='red'
        
    }
    
}