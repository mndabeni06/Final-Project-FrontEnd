// function to register player
/*function registerPlayer() {

  let details = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    home_address: document.getElementById("home_address").value,
    contact_number: document.getElementById("contact_number").value,
  }

  console.log(details)
    fetch("https://immense-coast-90376.herokuapp.com/player_reg/", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-type": "application/json"
        
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Registered successfully!, please log in.");
          window.location.href = "./login.html";
        } else {
          alert("Please enter correct information");
          
        }
      });
  }*/

