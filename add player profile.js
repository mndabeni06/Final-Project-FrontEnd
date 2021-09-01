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
    showproducts(products);
  });

//* Show-Products Button*//
function showproducts(products) {
  let product_container = document.querySelector("#players-container");
  product_container.innerHTML = "";
  products.data.forEach((product) => {  
    product_container.innerHTML += `
    <div class = "players-container" ">
        <img src="${product.image}" class = "image">
        <div class= "player-content">
        <p class = "full-name"> ${product.full_name}</p>
        <p class = "nickname"> ${product.nickname}</p>
        <p class = "date-of-birth"> ${product.date_of_birth}</p>
        <p class = "age"> ${product.age}</p>
        <p class = "citizenship"> ${product.citizenship}</p>
        <p class = "position"> ${product.position}</p>
        <p class = "place_of_birth"> ${product.place_of_birth}</p>
        <p class = "current_club"> ${product.current_club}</p>
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
      <div class = "products">
            <img src="${cartItem.image}" class = "image">
            <div class = "player-content"> 
                <p class = "full-name"> ${cartItem.full_name}</p>
                <p class ="nickname"> ${cartItem.nickname}</p>
                <p class ="date-of-birth"> ${cartItem.date_of_birth}</p>
                <p class ="citizenship"> ${cartItem.citizenship}</p>
                <p class ="place_of_birth"> ${cartItem.place_of_birth}</p>
                <p class ="current_club"> ${cartItem.current_club}</p>
                <button class ="revome_player"  onclick="removePlayer(${cartItem.player_id})">Remove Player</button>     
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
    return (item.player_id = player_id);
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

// Deleting Items from the cart //

function removePlayer(id1) {
  let product = products.data.find((item) => {
    return item.player_id == id1;
  });
  let prod_id = product.player_id;
  console.log(prod_id);

  fetch("https://ancient-dawn-92955.herokuapp.com/delete-products", {
    method: "POST",
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
      if (data["message"] == "Product deleted successfully.") {
        alert("Deleted succesfully");
      } else {
        alert("Products Not Deleted");
      }
    });

  console.log(product);
  console.log(cart);
}

// Remove Items from Cart //
function removePlayer(player_id) {
  let product = products.data.find((item) => {
    return item.player_id == player_id;
  });

  cart.splice(
    cart.findIndex((a) => a.player_id === product.player_id),
    1
  );
  renderCart(cart);
}

