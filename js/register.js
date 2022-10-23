document.getElementById("btn-regis").addEventListener("click", function (event) {
    event.preventDefault();
    register();
    alert("Registrasi berhasil. Silahkan Login");
  });

  function register() {
    console.log("clicked");
  
    let formData = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      telp: document.getElementById("telp").value,
      password: document.getElementById("password").value,
    };
    
    console.log(formData);
  
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST", 
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    }

    postData(
      "https://63500c77df22c2af7b61ac65.mockapi.io/user",
      formData
    ).then((data) => {
      console.log(data);
    });
  }