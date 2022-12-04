
    function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
let data=JSON.parse(localStorage.getItem("signup"));
document.querySelector("form").addEventListener("submit",match);
function match(elem){
    elem.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#myInput").value;

    console.log(email,password);
    var check=data.filter(function(elem){
        return email==elem.email && password==elem.password;
    })
    console.log(check)
    if(check.length==0){
        alert("wrong credential")
    }else{
        alert("login successfully")
        localStorage.setItem("user",check[0].name)
        window.location.href="index.html"
    }
}

