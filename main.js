const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const admin = 'admin';
    const password_admin = 'admin';


    if (login == admin && password == password_admin) {
        console.log("Siz daxil olduz")
    } else {
        console.log("Qeydiyyat edin")
    }

})
