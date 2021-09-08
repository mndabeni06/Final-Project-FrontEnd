const user = window.localStorage;
function login(){
    fetch("https://immense-coast-90376.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("auth_username").value,
        password: document.getElementById("auth_password").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
    if (data["message"] == "New player has been successfully added to database") {
          alert("Player added")
          window.location.href = "./add player profile.html";
          
          
        } else {
          
          window.location.href ="./index.html";
        }
      });

}
    


function collect(){

    let inputUsername= document.getElementById("auth_username");
     localStorage.setItem("username", inputUsername.value);
    let inputPassword= document.getElementById("auth_password");
     localStorage.setItem("password", inputPassword.value);
  }