let checkUser = JSON.parse(localStorage.getItem('checkUserlogin'));
if(checkUser){
    window.location.href = "dashboard.html";
}

const save = () =>{
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let role = document.getElementById('role').value;
    let allUser = JSON.parse(localStorage.getItem('register'));
    let ans = allUser.filter((v)=>{
        if(v.email == email){
            return v.email;
        }
    })
    if(ans.length != 0){
        if(ans[0].password == password){
             if(ans[0].role == role){
                localStorage.setItem('checkUserLogin',JSON.stringify(ans[0]));
                window.location.href = "dashboard.html";
             }else{
                alert('check role');
             }
        }else{
            alert("password is not valid");
        }
    }else{
        alert("Email is not found");
    }
}

const forget = () =>{
    window.location.href = "newemail.html";
}
const otp = () => {
    let email = document.getElementById('Email').value;
    let check = JSON.parse(localStorage.getItem('register'));
    let ans = check.filter((v)=>{
        return v.email == email;
    })
    if(ans.length == 1){
        let newotp = Math.floor(Math.random() * 100000);
        let obj = {
            userotp : newotp,
            email : ans[0].email
        }
        localStorage.setItem('userotp',JSON.stringify(obj));
        alert("your otp:- "+newotp)
        window.location.href = "otp.html"
    }else{
        alert("Email is not valid");
    } 
}

const newotp = () => {
    let otp = document.getElementById('Otp').value;
    let checkotp = JSON.parse(localStorage.getItem('userotp'));
    if(checkotp.userotp == otp){
        window.location.href = "newpassword.html";
    }else{
        alert("otp is wrong");
    }
}

const newpassword = () =>{
    let newpassword = document.getElementById('NewPassword').value;
    let ConfrimPassword = document.getElementById('ConfrimPassword').value;
    if(newpassword == ConfrimPassword){
        let alldatainput = JSON.parse(localStorage.getItem("register"));
        let checkotp = JSON.parse(localStorage.getItem("userotp"));

        let ans = alldatainput.filter((val) => {
            if(val.email == checkotp.email){
                val.pmassword = ConfrimPassword
            }
            return val;
        });
        localStorage.setItem("register",JSON.stringify(ans));
        alert("password successfully changed");
        window.location.href = "index.html";

    }else{
        alert("newpassword and confirm password do not match");
    }
};  