//Loging informatio
document.getElementById('login-submit').addEventListener('click', function () {
   //User email
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;
   //User password
    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    //Loging to transgestion page.
    if (userEmailValue == '7224rahul@gmail.com' && userPasswordValue == 7224637) {
        window.location.href = 'banking.html';
    }

})