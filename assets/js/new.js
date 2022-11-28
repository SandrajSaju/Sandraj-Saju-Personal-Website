function validation(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var subject=document.getElementById("subject").value
    var message=document.getElementById("message").value
    var error_message=document.getElementById("error_message")
    var text;
    error_message.style.padding="10 px";

    var flag = 0;
    
    if(name.length <4){
        text="Please Enter a Valid Name"
        error_message.innerHTML=text;
        flag=1;

    }
    if(email.indexOf("@") == -1 || email.length <5){
        text="Please Enter a Valid Email "
        error_message.innerHTML=text;
        flag=1;

    }
    if(subject.length <4){
        text="Please Enter an exact Subject"
        error_message.innerHTML=text;
        flag=1;

    }
    if(message.length <10){
        text="Please Enter a proper message"
        error_message.innerHTML=text;
        flag=1;
    }
    

    if(flag==0){
       error_message.style.display = 'none';
       alert("Form Submitted Successfully");
    }
}