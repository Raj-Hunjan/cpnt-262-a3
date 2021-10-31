"use strict";

const foxxy = document.querySelector('.fox');
const button = document.querySelector('.btn');

let fox = function() {
  fetch('https://randomfox.ca/floof/')
  .then(function(response){
  // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    };
  return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
    foxxy.innerHTML = 
      `<figure>
      <img src='${data.image}' alt ='fox images'>
      </figure>`
    console.log(data);
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
};
// API is not an array so I had to use this method.
fox();
button.addEventListener('click', fox);
 




