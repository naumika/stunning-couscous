console.log('this works')

//---------- DATASET

/*const flowers = [
  {
    name: "Tulip",
    category: "Plants",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    category: "Plants",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    category: "Plants",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
]; */

//---------- RENDER FLOWERS TO PAGE

const ul = document.querySelector("ul");

function renderFlowersToPage(results) {
  //iterate over data set
  for(let i = 0; i < results.length; i++){
    // create list item 
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].category) //Birds
    // add the flower name
    let title = document.createElement('h4')
    title.textContent = results[i].name //Rose 
    // add flower category
    let category = document.createElement('p')
    category.classList.add(results[i].category)
    category.textContent = results[i].category
    
    // append flower image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)


    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(category)
    listItem.appendChild(image)
}
};
renderFlowersToPage(flowers);

//---------- FILTER FLOWERS BY category

let filterBtns = document.querySelector(".filters");

let cards = document.querySelectorAll(".card");

function filterFn(event) {
  console.log(event.target)  
  if(event.target.classList.contains('filter-btn')){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')
    
    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // Plants

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }
    }
  }
}

filterBtns.addEventListener("click", filterFn);

// JavaScript
const library = document.getElementById('library');
const canvas = document.getElementById('canvas');

// dragstart event listener on each element in the library
library.querySelectorAll('[draggable="true"]').forEach(element => {
  element.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', event.target.id);
  });
});

// dragover event listener on the canvas
canvas.addEventListener('dragover', event => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
});

// drop event listener on the canvas
canvas.addEventListener('drop', event => {
  event.preventDefault();
  const elementId = event.dataTransfer.getData('text/plain');
  const element = document.getElementById(elementId);
  const clone = element.cloneNode(true);
  clone.setAttribute('draggable', false);
  clone.style.position = 'absolute';
  clone.style.left = `${event.clientX}px`;
  clone.style.top = `${event.clientY}px`;
  canvas.appendChild(clone);
});

// drag event listener on each element on the canvas
canvas.querySelectorAll('[draggable="false"]').forEach(element => {
  element.addEventListener('drag', event => {
    const canvasRect = canvas.getBoundingClientRect();
    element.style.left = `${event.clientX - canvasRect.left}px`;
    element.style.top = `${event.clientY - canvasRect.top}px`;
  });
});


