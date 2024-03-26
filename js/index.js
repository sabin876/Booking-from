// getting the counter element
let countElement = document.getElementById("count");
//getting the increment and decrement buttons
let incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
//inital count
let count = 0;
//function to update the count display
function updateCount() {
   countElement.textContent = count;
}

//event listener for the increment button
incrementButton.addEventListener("click", () => {
    count++;
    updateCount();
});

//event listener for the  decrement button
decrementButton.addEventListener("click", () => {
   if (count > 0) {
      count--;
      updateCount();
   }
});

//initial update
updateCount();
