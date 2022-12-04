function display_login_modal(){
    return `<div class="modal fade in modal-sign-in-up referral-modal-sign-in-up" id="login-modal" style="display: block;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ic-close-quickview">
                
            </div>
            <div class="modal-login-container">
                <div>
                    <form class=" login-form num-email-form" data-ga-event-category="Login" data-ga-event-action="Welcome to AJIO " data-ga-event-label="Screen Launch">
                        <h1>Welcome to <span class=""> AJIO </span>
                        </h1>
                        <div class="">
                            <h2>Join / Sign In using</h2>
                            <div class="social-login">
                                <div class="fb-login">
                                    <div data-ga-event-category="Login" data-ga-event-action="Welcome to AJIO" data-ga-event-label="Facebook button clicked - failed/success">
                                        <span class="fb-icon"></span>
                                        <span class="social-txt ">Facebook</span>
                                    </div>
                                </div>
                                <div class="google-login">
                                    <span class="google-icon"></span>
                                    <span class="social-txt">Google</span>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div class="or-separator"> <hr>  <span class="or-text-desktop"> Or </span>  <hr> </div>
                        </div>
                        <div>
                            <div>
                                <label> Email*
                                    <input required type="text" name="username" size="32" class="username" maxlength="254" value="">
                                </label>
                                <label> Password*
                                    <input required type="text" name="password" size="32" class="password" maxlength="254" value="">
                                </label>
                                <div id="error-msg" class="error-msg">
                                </div>
                            </div>
                            <div>
                                <input type="submit" class="login-btn" data-ga-event-category="Login" data-ga-event-action="Welcome to AJIO" data-ga-event-label="Continue button click - " value="Continue">
                            </div>
                            <div class="btn-action-txt">
                                <span class="tnc"> By Signing In, I agree to </span>
                                <a data-ga-event-category="Login" data-ga-event-action="Welcome to AJIO" data-ga-event-label="T&amp;C Click" href="https://www.ajio.com/help/termsAndCondition">Terms and Conditions</a>.
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>`
}

    // document.querySelector('form').addEventListener('submit',loginCheck)
    async function loginCheck(){
        console.log('123')
        event.preventDefault()
        let email = document.querySelector('.username').value 
        let pass = document.querySelector('.password').value
        let data = await getUser(email)
        console.log(data)
        if(!data.length){
            createUser(email,pass)
        }else{
            checkUser(data[0],pass)
        }
    }

    function checkUser(obj,password1){
        console.log("check")
        if(obj.password==password1){
            localStorage.setItem("signin",obj.id)
            document.querySelector('#sign-in').innerHTML=null
            document.querySelector(".login-modal").innerHTML = obj.email
            window.location.reload()
        }else{
            alert('Incorrect Password')
        }
    }

    function createUser(email1,password1){
        console.log("create");
        let obj = {
            email : email1,
            password : password1,
            cart : [],
            address : []
        }
        var myHeaders = new Headers();
        myHeaders.append("access-control-allow-credentials", "true");
        myHeaders.append("Content-Type", "application/json");
        let data = fetch(`https://ajio-json.onrender.com/users`,{
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(obj),
            redirect: 'follow'
            })
            document.querySelector('#sign-in').innerHTML=null
            data.then((res)=>{
                return res.json()
            }).then((res)=>{
                document.querySelector(".login-modal").innerHTML = res.email
                localStorage.setItem("signin",res.id)

                window.location.reload()
        })
        // console.log(data)
    }
    async function getUser(email){
        let data = await fetch(`https://ajio-json.onrender.com/users?email=${email}`)
        return data.json()
    }
    
export {display_login_modal,loginCheck,getUser,checkUser,createUser}