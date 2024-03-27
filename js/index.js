// getting the counter element
let countElement = document.getElementById("count");
//getting the increment and decrement buttons
let incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
//getting the paragraph tag
let p = document.querySelector(".content1");
let h5 = document.querySelector(".content2");
console.log(p.innerHTML);
console.log(h5);
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

//submit 
function Submit(e){
  e.preventDefault();
  p.innerHTML = `${count}*$80USD = `;
  h5.innerHTML = `$${count * 80 }USD Total`;
}


