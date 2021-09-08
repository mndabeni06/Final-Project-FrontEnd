
// Update player profiles //
function updateProfile() {
    const player_id = document.getElementById('player_id').value;
    const full_name = document.getElementById('full_name').value;
    const nickname = document.getElementById('nickname').value;
    const age = document.getElementById('age').value;
    const date_of_birth = document.getElementById('date_of_birth').value;
    const place_of_birth = document.getElementById('place_of_birth').value;
    const citizenship = document.getElementById( 'citizenship').value;
    const current_club = document.getElementById('current_club').value;
    const position = document.getElementById('position').value;
    const image = document.getElementById('image').src;
  
    
  
    fetch("https://immense-coast-90376.herokuapp.com/update_profile/"  + `${ player_id }`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            player_id: player_id,
            full_name: full_name,
            nickname: nickname,
            age: age,
            date_of_birth: date_of_birth,
            place_of_birth: place_of_birth,
            citizenship: citizenship,
            current_club: current_club,
            position: position,
            player_image: image
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("You have successfully changed a updated profile")
  
        if (data['message'] == "Updated Profile") {
            alert('You have successfully updated a player! Please see player profiles page!')
            window.location.href = '/add player profile.html'
        }
    })
  }
  
  function addImage() {
    const preview = document.querySelector('image');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);
  
    if (file) {
        reader.readAsDataURL(file);
    }
  }
  
  