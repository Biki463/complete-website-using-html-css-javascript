function myfunction(){
    var x =document.getElementById("pass");

   if(x.type ==="password"){
        x.type ="text";
    }
    else{
        x.type ="password";
    }
}
function validation(){
    var password = document.getElementById("pass");
    var length= document.getElementById("length");

         if(password.value.length >= 8){
            alert("Login Successfull");
            window.location.replace("project2.html");
            return false;
        }
        else{
            alert("login Failed");
        }
}
