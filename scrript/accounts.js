
document.querySelector("#form1").addEventListener("submit", Signup);
var Userdata = JSON.parse(localStorage.getItem("Userdata")) || [];
var flag = false;
let username = JSON.parse(localStorage.getItem("username")) || [];


function Signup(event) {

    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#loginpassword").value;
    let conform_password = document.querySelector("#confirmpassword").value;

    let userData ={
        Email: email,
       password:password,
        conform_password:conform_password,
    };

    if (Userdata.length != 0) {
        let arr = JSON.parse(localStorage.getItem("Userdata")) || [];
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Email === email) {
                flag = true;
                break;
            }

        }

        if (flag) 
        {
            alert("User Exists!!");
        } 
        else {
            Userdata.push(userData);
            localStorage.setItem("Userdata", JSON.stringify(Userdata));
            alert("Signup Successful");
            window.location.href = "#";
            document.getElementById("email").value =null;
            document.getElementById("loginpassword").value =null;
            document.getElementById("confirmpassword").value =null;
        }
    } else {
        Userdata.push(userData);
        localStorage.setItem("Userdata", JSON.stringify(Userdata));
        alert("Signup Successfu");
        window.location.href = "#";
        document.getElementById("email").value =null;
        document.getElementById("loginpassword").value =null;
        document.getElementById("confirmpassword").value =null;
    }

}


document.getElementById("form2").addEventListener("submit", Login);

function Login(event) {
    event.preventDefault();
    let email = document.querySelector("#signin_email").value;
    let password = document.querySelector("#loginpassword").value;

    let arr1 = JSON.parse(localStorage.getItem("Userdata"));

    var flag=false;
for(var i=0; i<arr1.length; i++)
{
 
  if(arr1[i].Email==email && arr1[i].conform_password==password)
  {
    flag=true
    
  }
}
if (flag==true)
{
  alert("success")
  window.location.href ="../html/index.html"

}
else{
  alert("login unccessful")
}

}
document.querySelector("#guest").addEventListener("click",GUEST);
function GUEST(){
    window.location.href="index.html";
};