
// Delete Profile //


function deleteProfile() {
    const player_id = document.getElementById('player_id').value;
    console.log(player_id)
  
   /* if (typeof(player_id) === "string") {
        return alert('Please Use Correct Values to delete profile')
    }*/
  
    fetch('https://immense-coast-90376.herokuapp.com/delete-profile/' + `${ player_id }`, {
        method: 'PUT',
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You Successfully deleted the profile')
  
        if (data['message'] == 'Profile Deleted Successfully') {
            alert('You successfully deleted the profile!')
            window.location.href = '/add player profile.html'
        } 
    })
  }
  