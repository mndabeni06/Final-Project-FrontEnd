// function for a new player to create a profile
const mystorage = window.localStorage;


function createProfile() {
    fetch("https://immense-coast-90376.herokuapp.com/create_profile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${mystorage.getItem("jwt-token")}`,
      },
      body: JSON.stringify({
        player_id: document.getElementById("player_id").value,
        full_name: document.getElementById("full_name").value,
        nickname: document.getElementById("nickname").value,
        date_of_birth: document.getElementById("date_of_birth").value,
        age: document.getElementById("age").value,
        place_of_birth: document.getElementById("place_of_birth").value,
        position: document.getElementById("position").value,
        current_club: document.getElementById("current_club").value,
        image: document.getElementById("image").value,
      }),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        console.log("success");
        if (data["description"] == "Player Profile create succesfully") {
          alert("Congragulations you have been added successfuly");
          window.location.href = "./add player profile.html";
        } else {
          alert("did not add!, please make sure the information is correct.");
          window.location.href = "./add player profle.html";
        }
      });
  }