
// Delete Profile //

function deleteProfile() {
    const player_id = document.getElementById('player_id').value;
    console.log(player_id)
  
  
    fetch('https://immense-coast-90376.herokuapp.com/delete-profile/' + `${ player_id }`, {
        method: 'PUT',
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You Successfully deleted the profile')
  
        if (data['status_code'] == 200) {
            alert('You successfully deleted the profile!')
            window.location.href = '/add player profile.html'
        } 
    })
  }
  