const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const admin = 'admin';
    const password_admin = 'admin';

    if (login.length === 0 || password.length === 0) {
        alert("Melumatlarinizi daxil edin");
        return;
    }


    if (login == admin && password == password_admin) {
        alert("Siz daxil olduz")
    } else {
        alert("Qeydiyyat edin")
    }

})
