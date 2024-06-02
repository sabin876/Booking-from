document.addEventListener('DOMContentLoaded', () => {
    const plans = document.querySelectorAll('.sub');
    const totalPriceElement = document.querySelector('.total-price');
    const contentElement = document.querySelector('.content');
    //minimum and maximum limits for each plan

    const minLimits = [1, 6, 11];
    const maxLimits = [5, 10, 20];

    let selectedPlan = null;

    plans.forEach((plan, index) => {
        const incrementBtn = plan.querySelector('.increment');
        const decrementBtn = plan.querySelector('.decrement');
        const countElement = plan.querySelector('.count');
        const selectBtn = plan.querySelector('.calculate-total');
        const price = parseInt(plan.dataset.price, 10);

        //initialize tha count to minimum limit
        countElement.textContent = minLimits[index];

        incrementBtn.addEventListener('click', () => {
            let count = parseInt(countElement.textContent, 10);
            if (count < maxLimits[index]) {
                countElement.textContent = parseInt(countElement.textContent, 10) + 1;
                if (selectedPlan === plan) {
                    updateTotal();
                }
            }
        });

        decrementBtn.addEventListener('click', () => {
            let count = parseInt(countElement.textContent, 10);
            if (count > minLimits[index]) {
                countElement.textContent = count - 1;
                if (selectedPlan === plan) {
                    updateTotal();
                }
            }
        });

        selectBtn.addEventListener('click', () => {
            selectedPlan = plan;
            updateTotal();
        });
    });

    function updateTotal() {
        const count = parseInt(selectedPlan.querySelector('.count').textContent, 10);
        const price = parseInt(selectedPlan.dataset.price, 10);
        const total = count * price;

        contentElement.textContent = `${count} * $${price} USD =`;
        totalPriceElement.textContent = total;
    }
});


// Button as radio or checkbox input
const allRadioInputs = document.querySelectorAll(".wo-check-input");

allRadioInputs.forEach(radioInput => {
    radioInput.onchange = () => {

        if (radioInput.type === "radio") {
            // getting all the radio input elements with same name as radioInput and removing "select" class from its corresponding label

            const sameNameInputs = document.getElementsByName(`${radioInput.getAttribute("name")}`);
            sameNameInputs.forEach(inp => {
                const label = document.querySelector(`label[for='${inp.getAttribute("id")}']`);
                label.classList.remove("selected");
            })
        }

        const selectedLabel = document.querySelector(`label[for='${radioInput.getAttribute("id")}']`);
        selectedLabel.classList.toggle("selected");
    }
})

/*document.addEventListener('DOMContentLoaded', function() {
        const subs = document.querySelectorAll('.sub');
        subs.forEach(sub => {
            const incrementBtn = sub.querySelector('.increment');
            const decrementBtn = sub.querySelector('.decrement');
            const select = sub.querySelector('.calculate-total');
            const countSpan = sub.querySelector('.count');
                    //const price = parseInt(sub.dataset.price);
                    //console.log(price);

            incrementBtn.addEventListener('click', function() {
                let count = parseInt(countSpan.textContent);
                countSpan.textContent = ++count;
            });

           decrementBtn.addEventListener('click', function() {
                let count = parseInt(countSpan.textContent);
                if (count > 0) {
                    countSpan.textContent = --count;
                }
           });

          select.addEventListener('click', function(e) {
                console.log(e);
          });
        });

                /*function updateTotal() {
                    let total = 0;
                    subs.forEach(sub => {
                        const count = parseInt(sub.querySelector('.count').textContent);
                        const price = parseInt(sub.dataset.price);
                        console.log(count, price)
                        if (!isNaN(count) && !isNaN(price)) {
                            total += count * price;
                        } else {
                            console.error('Invalid count or price detected:', count, price);
                        }
                    });
                    document.querySelector('.total .total-price').textContent = total;
                }

            });
        

        

            const countSpan = sub.querySelector('.count');
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
            //const price = parseInt(sub.dataset.price);
            //console.log(price);

            incrementBtn.addEventListener('click', function() {
                let count = parseInt(countSpan.textContent);
                countSpan.textContent = ++count;
            });

            decrementBtn.addEventListener('click', function() {
                let count = parseInt(countSpan.textContent);
                    if (count > 0) {
                        countSpan.textContent = --count;
                    }
            });

            select.addEventListener('click', function(e) {
            console.log(e);
            });

        /*function updateTotal() {
        let total = 0;
        subs.forEach(sub => {
          const count = parseInt(sub.querySelector('.count').textContent);
          const price = parseInt(sub.dataset.price);
          console.log(count, price)
          if (!isNaN(count) && !isNaN(price)) {
            total += count * price;
          } else {
            console.error('Invalid count or price detected:', count, price);
          }
        });
        document.querySelector('.total .total-price').textContent = total;
      }*

    });*/






