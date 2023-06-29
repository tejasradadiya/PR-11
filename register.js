let data=[
    {
        userid: 1,
        name: 'Tejas',
        email: 'tejas@gmail.com',
        password: 'tejas@123',
        role: 'admin'
    }
];

const save = () => {
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let confrimpassword = document.getElementById('ConfrimPassword').value;
    
    if(confrimpassword == password){
        let obj = {
            userid : Math.floor(Math.random() * 1000),
            name : name,
            email : email,
            password : password,
            confrimpassword : confrimpassword,
            role : "user"
        }

        if(localStorage.getItem('register') === null || localStorage.getItem('register') === undefined){
            data.push(obj);
            localStorage.setItem('register',JSON.stringify(data));
        }else{
            let val = JSON.parse(localStorage.getItem('register'));
            val.push(obj);
            localStorage.setItem('register',JSON.stringify(val));
        }
        alert("User successfully created");
        document.getElementById('Name').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('Password').value = "";
        document.getElementById('ConfrimPassword').value = "";
        window.location.href = "index.html";
    }else{
        alert("password must be not same.");
    }

}
let alluser = JSON.parse(localStorage.getItem('register'));