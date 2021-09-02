let products = [];
let cart = [];
const mystorage = window.localStorage;
console.log(cart);
//* Fetching Players from the Api*//
fetch("https://immense-coast-90376.herokuapp.com/player_profiles/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showplayers(products);
  });

//* Show-Players Profiles*//
function showplayers(products) {
  let product_container = document.querySelector("#players-container");
  product_container.innerHTML = "";
  products.data.forEach((product) => {  
    product_container.innerHTML += `
    <div class = "players-container" ">
        <img src="${product.image}" class = "image">
        <div class= "player-content">
        <h5 class = "full-name"> ${product.full_name}</h5>
        <h5 class = "nickname"> ${product.nickname}</h5>
        <h5 class = "date-of-birth"> ${product.date_of_birth}</h5>
        <h5 class = "age"> ${product.age}</h5>
        <h5 class = "citizenship"> ${product.citizenship}</h5>
        <h5 class = "position"> ${product.position}</h5>
        <h5 class = "place_of_birth"> ${product.place_of_birth}</h5>
        <h5 class = "current_club"> ${product.current_club}</h5>
        <button onclick="addPlayer(${product.player_id})"> Add Player</button>
        </div>
    </div>
    `;
  });
}

// Function to render Cart When items are being added// 
function renderCart(cartItems) {
  cartItems.length > 0;
  let cartContainer = document.querySelector("#cart");
  if (cartItems.length > 0) {
    cartItems.map((cartItem) => {
      cartContainer.innerHTML += `
      <div class = "players-container">
            <img src="${cartItem.image}" class = "image">
            <div class = "player-content"> 
                <h5 class = "full-name"> ${cartItem.full_name}</h5>
                <h5 class ="nickname"> ${cartItem.nickname}</h5>
                <h5 class ="date-of-birth"> ${cartItem.date_of_birth}</h5>
                <h5 class ="citizenship"> ${cartItem.citizenship}</h5>
                <h5 class ="place_of_birth"> ${cartItem.place_of_birth}</h5>
                <h5 class ="current_club"> ${cartItem.current_club}</h5>
                <button class ="contactPlayer"onclick="contactPlayer(${cartItem.player_id})">Contact Player</button>
                <button class ="revome_player"onclick="removePlayer(${cartItem.player_id})">Remove Player</button>
                 

              </div>
            
        </div>
      
      
      `;
    });
   
  } else {
    cartContainer.innerHTML = "<h2> No players in this page</h2>";
  }
}

//* Add to cart functions*//  
function addPlayer(player_id) {
  let product = products.data.find((item) => {
    return (item.player_id == player_id);
  });
  console.log(product);
  cart.push(product);
  renderCart(cart);
  console.log("See Cart Items Here: ", cart);
}



// Function to toggleCart //

function toggleCart() {
  document.querySelector("#cart").classList.toggle("active");
}

// Fucntion to delete profiles //

function deleteProfile(id1) {
  let product = products.data.find((item) => {
    return item.player_id == id1;
  });
  let prod_id = product.player_id;
  console.log(prod_id);

  fetch("https://immense-coast-90376.herokuapp.com/delete-profile/", {
    method: "PUT",
    body: JSON.stringify({
      id: prod_id,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["message"] == "Profile deleted successfully.") {
        alert("Deleted succesfully");
      } else {
        alert("Profile Not Deleted");
      }
    });

  console.log(product);
  console.log(cart);
}

// Remove Items from Cart //
function removePlayer(player_id) {
  let player = products.data.find((item) => {
    return item.player_id == player_id;
  });

  cart.splice(
    cart.findIndex((a) => a.player_id === player.player_id),
    1
  );
  renderCart(cart);
}



