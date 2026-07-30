const contact = document.getElementById("contactForm");

if(contact){

contact.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name==""||email==""||message==""){

alert("გთხოვთ შეავსოთ ყველა ველი.");

}

else{

alert("თქვენი შეტყობინება წარმატებით გაიგზავნა.");

contact.reset();

}

});

}




const register=document.getElementById("registerForm");

if(register){

register.addEventListener("submit",function(e){

e.preventDefault();

let fullname=document.getElementById("fullname").value;
let email=document.getElementById("regemail").value;
let password=document.getElementById("password").value;

if(fullname==""||email==""||password==""){

alert("ყველა ველის შევსება აუცილებელია.");

}

else{

alert("რეგისტრაცია წარმატებით დასრულდა.");

register.reset();

}

});

}
