const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

// let button = document.getElementById('btn');
document
  .getElementById("btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    login();
  });

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

function login() {
//   let dataUser = [];
  let formData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  let url = "https://63500c77df22c2af7b61ac65.mockapi.io/user"; 

  fetch(url) 
    .then((response) => response.json())
    .then((result) => {
      result.forEach((data) => {
        if (
          data.username == formData.username &&
          data.password == formData.password
        ) {
          alert("Berhasil Login");
          window.location.href = "./homePage-ApotekPW.html";
        } 
      }); 
    })

    .catch((error) => console.log(error));
    
}



