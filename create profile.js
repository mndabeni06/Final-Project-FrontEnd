const mystorage = window.localStorage;


function createProfile(){
  document.querySelector('.addprocontainer').classList.toggle('active')
}

function previewFile() {
  const image = document.querySelector('.player_image');
  const file = document.querySelector('#aimage').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    image.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}



function createplayerProfile(){
  let fullname  = document.getElementById("full_name").value
  let nickname = document.getElementById("nickname").value
  let date_of_birth  = document.getElementById("date-of-birth").value
  let age  = document.getElementById("age").value
  let position  = document.getElementById("position").value
  let citizenship = document.getElementById("citizenship").value
  let place_of_birth = document.getElementById("place-of-birth").value
  let current_club = document.getElementById("current-club").value


  let playerimage = document.querySelector('.imageup').src

  if (full_name && nickname && date_of_birth && citizenship && place_of_birth && current_club && playerimage){
      fetch(`https://immense-coast-90376.herokuapp.com/create_profile/`, {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json',
              'Authorization' : `jwt ${mystorage.getItem('jwt-token')}`
          },
          body: JSON.stringify({
              "full_name": fullname,
              "nickname":nickname,
              "date-of-birth":date_of_birth,
              "age": age,
              "citizenship": citizenship,
              "position": position,
              "place_of_birth": place_of_birth,
              "current_club": current_club,
              "playerimage": playerimage,
          }),
      }).then(response => response.json).then(data => {
          console.log(data);
          console.log('success')})
          .catch(err => alert('Error. Please try again, or log in again'))
  }else{
      alert('Please fill in all forms before submitting')
  }
}
