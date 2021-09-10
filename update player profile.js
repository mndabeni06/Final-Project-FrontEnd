/*function getPlayer() {
    fetch("https://immense-coast-90376.herokuapp.com/player-info/"+`${localStorage.getItem("password")}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("player_id",`${data.data.player_id}`)
        
        let product_container = document.querySelector("#player-info");
        product_container.innerHTML = "";
      
          product_container.innerHTML += `
  
            <div class = "player-info">
              <div class = "update-info"> 
                <p class = "player_name">First name: ${data.data.first_name}</p>
                <p class = "player_lastname">uast Name: ${data.data.last_name}</p>
                <p class = "player_username">username: ${data.data.username} </p>
                <p class = "player_home_address"> home_address: ${data.data.home_address}</p>
                <p class = "player_contact_number"> contact_number: ${data.data.contact_number}</p>
                <p class = "player_email"> email address: ${data.data.email}</p>
              </div>
              
                
            </div>
           `;
        
      });
     
}
getPlayer();*/

function updateProfile() {
  const player_id = document.getElementById('player_id').value;
  console.log(player_id)

 /* if (typeof(player_id) === "string") {
      return alert('Please Use Correct Values to delete profile')
  }*/

  fetch('https://immense-coast-90376.herokuapp.com/update_profile/' + `${ player_id }`, {
      method: 'PUT',
  }).then(res => res.json()).then(data => {
      console.log(data)
      console.log('You Successfully updated the profile')

      if (data['status_code'] == 200) {
          alert('full_name updated successfully!')
          window.location.href = '/add player profile.html'
      } 
  })


function updateFullname(){
  let value = document.querySelector("#updatefullname").value;
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          full_name: value,
          
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("full_name updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong!!!");
          
        }
        
      
      });
  }
  
  function updateNickname(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },  
        body: JSON.stringify({
          last_name: document.querySelector("#updatenickname").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("nickname updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  function updateplace_of_birth(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: document.querySelector("#updateplace_of_birth").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Place of birth updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  function updateage(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT", 
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          password: document.querySelector("#updateage").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("player age updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  function updatedate_of_birth(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          phone_number: document.querySelector("#updatedate_of_birth").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Date of birth updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  function updatecitizenship(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_email: document.querySelector("#updatecitizenship").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Player citizenship updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  function updatecitizenship(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_email: document.querySelector("#updatecitizenship").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Player citizenship updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  function updatecitizenship(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_email: document.querySelector("#updatecitizenship").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Player citizenship updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }

  function updateposition(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_email: document.querySelector("#updateposition").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Player position updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  
  function updatecurrent_club(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_email: document.querySelector("#updatecurrent_club").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Current Club updated successfully");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  

  function updateimage(){
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"+`${localStorage.getItem("player_id")}`, {
        method: "PUT",
        
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_email: document.querySelector("#updateimage").value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Player image updated successfull");
          location.reload();
        } else {
          alert("Did not update something went wrong");
          
        }
      
      });
  }
  
  
}


// Updating Player Profiles //
