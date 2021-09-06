function addProducts() {
  fetch('https://lca-pointofsales.herokuapp.com//create_profile/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          product_name: document.getElementById('p_name').value,
          product_type: document.getElementById('p_type').value,
          product_price: document.getElementById('p_price').value,
          product_description: document.getElementById('p_description').value,
          product_image: document.querySelector('.imgurl').src

      }),
      mode: 'cors'
  }).then(res => res.json()).then(data => {
      console.log(data)
      console.log("You added a product successfully")

      if (data['message'] == "Player Profile Added Successfully") {
          alert('You have sucessfully Added A Product! Please View It On The Products Page')
          window.location.href = './add player profile'
      } else {
          alert('Form filled in incorrectly')
      }
  })
}

function addImage() {
  const preview = document.querySelector('.imgurl');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
      preview.src = reader.result;
  }, false);

  if (file) {
      reader.readAsDataURL(file);
  }
}