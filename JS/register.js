let registerForm =document.getElementById('registerForm').addEventListener('submit',function (event) {
    event.preventDefault();

    let email=document.getElementById('email').value;
    let passWord=document.getElementById('passWord').value;
    
    console.log(email, passWord);
    if (email && passWord) {
        localStorage.setItem('email',email)
        localStorage.setItem('passWord',passWord)
        
        window.location.href='../Pages/login.html'
    }
    
    
})