// Function for star rating
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function() {
      const ratingContainer = this.closest('.star-rating');
      const stars = ratingContainer.querySelectorAll('.star');
      const ratingValue = this.getAttribute('data-value');
      
      stars.forEach(star => {
          if (star.getAttribute('data-value') <= ratingValue) {
              star.innerHTML = '&#9733;'; // filled star
          } else {
              star.innerHTML = '&#9734;'; // empty star
          }
      });
      
      ratingContainer.setAttribute('data-rating', ratingValue); // store rating
  });
});

// Function for adding to cart
function addToCart() {
  alert("Added to cart successfully");
}
