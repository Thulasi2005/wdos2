const form= document.getElementById("detailsform");
const confirmbtn= document.getElementById("confirmbtn");

form.addEventListener("input", () => {
    const fullname=document.getElementById("fullname").Value;
    const mobilenumber=document.getElementById("mobilenumber").value;
    const email=document.getElementById("email").value;
    const confirmemail= document.getElementById("confirmemail").value;
    const gender= document.getElementById("gender").value;

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("mobilenumber", mobilenumber);
    localStorage.setItem("email", email);
    localStorage.setItem("fconfirmemail", confirmemail);
    localStorage.setItem("gender", gender);

    if(fullname  && email && confirmemail && email ===confirmemail){
        confirmbtn.disabled=false;
    } else{
        confirmbtn.disabled=true;
    }
    });

confirmbtn.addEventListener("click", () => {
    window.location.href="payment.html";
});