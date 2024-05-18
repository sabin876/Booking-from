document.addEventListener('DOMContentLoaded', function() {
        const subs = document.querySelectorAll('.sub');
      subs.forEach(sub => {
        const incrementBtn = sub.querySelector('.increment');
        const decrementBtn = sub.querySelector('.decrement');
        const select = sub.querySelector('.calculate-total');
        const countSpan = sub.querySelector('.count');
        const price = parseInt(sub.dataset.price);

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

        select.addEventListener('click', function() {
           updateTotal(); 
        });
      });

        function updateTotal() {
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
        

        

