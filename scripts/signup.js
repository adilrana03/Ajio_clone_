function myFunction() {
        var pass = document.getElementById("pass");
        if (pass.type === "password") {
          pass.type = "text";
        } else {
          pass.type = "password";
        }
      }
      var arr=JSON.parse(localStorage.getItem("signup")) || [];
      document.querySelector("form").addEventListener("submit",signupfun);
      function signupfun(){
          event.preventDefault();
          var name=document.getElementById("name").value;
          var email=document.getElementById("email").value;
          var password=document.getElementById("pass").value;
          var obj={ }
          obj.name=name;
          obj.email=email;
          obj.password=password;
          arr.push(obj);
          console.log(arr);
          alert("Signed up successfully")
          localStorage.setItem("signup",JSON.stringify(arr));
          window.location.href="login.html"
      }