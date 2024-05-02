document.addEventListener("DOMContentLoaded", function() {
console.log("DOM fully loaded");
 document.querySelectorAll('.counter1').forEach(counter => {
  const roomCount = counter.querySelector('.room-count');
  const incrementBtn = counter.querySelector('.increment-btn');
  const decrementBtn = counter.querySelector('.decrement-btn');

  incrementBtn.addEventListener('click', function() {
    roomCount.textContent = parseInt(roomCount.textContent) + 1;
  });

  decrementBtn.addEventListener('click', function() {
    if (parseInt(roomCount.textContent) > 0) {
      roomCount.textContent = parseInt(roomCount.textContent) - 1;
    }
  });
});
})
