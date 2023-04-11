const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', e => {
    images.forEach(otherImage => {
      if (otherImage !== image) {
        otherImage.style.zIndex = 1; // Send other image to back
      }
    });
    image.style.zIndex = 2; // Bring clicked image to front
  });
});