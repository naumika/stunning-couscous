const images = ['F1.png'];
const library = document.getElementById('image-library');

for (let i = 0; i < images.length; i++) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image');
  const image = document.createElement('img');
  image.src = images[i];
  imageContainer.appendChild(image);
  library.appendChild(imageContainer);

  image.addEventListener('click', () => {
    // display full-size image
  });
}