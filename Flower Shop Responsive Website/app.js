$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       autoplay:true,
        margin:30,
        loop:true,
        dots:true,
       nav:true,
       navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ],
       responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize total price
    let totalPrice = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.btn');

    // Get the cart total element
    const cartTotal = document.getElementById('cart-total');

    // Add click event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default action (if any)
            event.preventDefault();

            // Get the price of the product
            const priceElement = button.closest('.innerproductsection').querySelector('.price .clrchange');
            const price = parseFloat(priceElement.textContent.replace('Rs.', '').trim());

            // Update the total price
            totalPrice += price;

            // Update the cart total in the navbar
            cartTotal.textContent = `Rs. ${totalPrice.toFixed(2)}`;
        });
    });
});