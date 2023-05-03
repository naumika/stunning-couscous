console.log('this works')

//---------- DATASET

const data = [
  {
    name: "Oncorhynchus",
    category: "Fishes",
    image:
      "https://user-images.githubusercontent.com/122947570/236067099-5e9ad69b-f925-446a-bd9a-e71cf0d85c08.jpg"
  },
  {
    name: "Astyanax microlepis",
    category: "Fishes",
    image:
      "https://user-images.githubusercontent.com/122947570/236073710-4e483ed9-a87f-4cb8-91b9-9420b95a9bbe.png"
  },
  {
    name: "Bocachico",
    category: "Fishes",
    image:
      "https://user-images.githubusercontent.com/122947570/236073782-7d56271b-bcaa-4307-923c-c7271a66cca4.png"
  },
]; 

//---------- RENDER FLOWERS TO PAGE
const container = document.querySelector(".container");

function renderDataToPage(results) {
  //iterate over data set
  for(let i = 0; i < results.length; i++){
    // create list item 
    let card = document.createElement('div');
    // add a class to each item of the results
    card.classList.add('card', results[i].category) //Fishes
    // add the data name
    let title = document.createElement('h4')
    title.textContent = results[i].name //Oncorhynchus 
    // add data category
    let category = document.createElement('p')
    category.classList.add(results[i].category)
    category.textContent = results[i].category
    // Add draggable attributes
    card.setAttribute('draggable', true);
    card.setAttribute('data-item', i);
    // append flower image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)


    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(category)
    card.appendChild(image)
}
};
renderDataToPage(data);

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

    const filterValue = event.target.getAttribute('category') // Fish

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


// drag and drop
function dragStartHandler(event){
  let style = getComputedStyle(event.target, null);
  console.log(event)
  console.log(style)
  console.log(event.clientX)
  event.dataTransfer.setData('text/plain', (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'))
  event.currentTarget.style.backgroundColor = 'yellow'
}

function dragOverHandler(event){
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  return false
}

function dropHandler(event){
  let offset = event.dataTransfer.getData("text/plain").split(',')
  console.log('offset', offset)
  let elements = document.getElementsByClassName('card')
    elements[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    elements[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px'
    // dropzone.appendChild(elements[offset[2]])
    // console.log(elements[offset[2]])
    // dropzone.appendChild(document.getElementById(offset[2]));
    event.preventDefault();
    return false
}

// select all the cards
let card = document.getElementsByClassName('card');
// iterated over each of them
for (var i = 0; i < card.length; i++) {
  card[i].addEventListener('dragstart', dragStartHandler, false);
  document.body.addEventListener('dragover', dragOverHandler, false);
  document.body.addEventListener('drop', dropHandler, false);
}
