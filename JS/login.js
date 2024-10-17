let loginForm =document.getElementById('loginForm').addEventListener('submit',function (event) {
    event.preventDefault();

    let localEmail=localStorage.getItem('email')
    let localPassWord=localStorage.getItem('passWord')

    let email=document.getElementById('email').value;
    let passWord=document.getElementById('passWord').value;
    
    console.log(email, passWord);
    if (localEmail === email && localPassWord === passWord) {
       
       
        window.location.href = '../index.html'
    }  
    
})