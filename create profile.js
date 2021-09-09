function addProfile() {
  fetch('https://immense-coast-90376.herokuapp.com/create_profile/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          full_name: document.getElementById('full_name').value,
          nickname: document.getElementById('nickname').value,
          age: document.getElementById('age').value,
          date_of_birth: document.getElementById('date_of_birth').value,
          place_of_birth:document.getElementById('place_of_birth').value,
          citizenship:document.getElementById('citizenship').value,
          position:document.getElementById('position').value,
          current_club:document.getElementById('current_club').value,
          image: document.querySelector('.image').src

      }),
      mode: 'cors'
  }).then(res => res.json()).then(data => {
      console.log(data)
      console.log("Profile created successfully")

    if (data['status_code'] == 201) {
          alert('You have sucessfully Added A Profile! Please View It On The add player profile Page')
          window.location.href = './add player profile.html'
      } else {
          alert('Form filled in incorrectly')
      }
  })
}

function addImage() {
  const preview = document.querySelector('.image');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
      preview.src = reader.result;
  }, false);

  if (file) {
      reader.readAsDataURL(file);
  }
}