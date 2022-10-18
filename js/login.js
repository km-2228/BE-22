const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

// let button = document.getElementById('btn');

// js code untuk menampilkan/menyembunyikan kata sandi dan mengubah ikon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwFields => {
            if(pwFields.type === "password"){
                pwFields.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwFields.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// startlog()
// function startlog(){
//     var login = document.getElementById('username').value + document.getElementById('password').value;
//     var apoteker = ('apoteker') + ('apoteker123');
//     if(login == apoteker){
//         var logakses = document.getElementById('akses').innerHTML = 'Login Berhasil';
//     } else{
//         logakses = document.getElementById('akses').innerHTML = 'Login Gagal';
//     }
// }

// button.addEventListener('click', () => {
//     let user = document.getElementById('username').value;
//     let pass = document.getElementById('password').value;
//     var apoteker = ('apoteker') + ('apoteker123');
//     if(user && pass == apoteker){
//         var logakses = document.getElementById('akses').innerHTML = 'Login Berhasil';
//     } else{
//         logakses = document.getElementById('akses').innerHTML = 'Login Gagal';
//     }
// })



