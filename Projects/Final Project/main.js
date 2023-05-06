console.log('this works')

//---------- DATASET

const data = [
  // BIRDS
  {
    name: "Andean Emerald",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608827-0cb407e3-1f14-450f-8169-2c5f6eb14a57.png"
  },
  {
    name: "Berlepsch Tinamou",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608829-60ddd958-1008-4aa8-85eb-df600657fc2e.png"
  },
  {
    name: "Black Tinamou",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608830-b186db8e-8076-4c45-8103-4f3e08a7077d.png"
  },
  {
    name: "Black and White Warbler",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608831-76b4ca4f-91fa-4dbc-8f13-87e5a48419b3.png"
  },
  {
    name: "Bronze Tailed Plumeleteer",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608832-ec5fc20a-8ea1-4d9b-a497-f936d4472df3.png"
  },
  {
    name: "Buff Breasted Sandpiper",
    category: "Birds",
    image:
      "https://user-images.githubusercontent.com/122947570/236608833-e1bcf30a-4078-4d77-b474-a179552b0d64.png"
  },
  {name: "Cedar Waxwing",
  category: "Birds",
  image:
    "https://user-images.githubusercontent.com/122947570/236608834-affe4888-1906-4c4d-bfcc-1d8026f44c93.png"
},
{name: "Flame Rumped Tanager",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608835-895938d3-8bc8-45c2-8259-e65952cd28cf.png"
},
{name: "Great Tinamou",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608840-ed7b2897-e88f-4d2e-a2c9-76b532e1c1b5.png"
},
{name: "Fulvous Whistling Duck",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608839-6453c036-a0b0-42e3-ae14-10469ef964c3.png"
},
{name: "Masked Duck",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608841-0161355f-6d11-45b3-a2c8-faf74fdb5f2b.png"
},
{name: "Plain Backed Antpitta",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608842-fd1a42f0-f82f-4b3e-a5b8-6add9fd05d22.png"
},
{name: "Purple Martin",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608843-9a8a572b-e24b-417e-89ea-b9c420bfdfa8.png"
},
{name: "Ruddy Duck",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608845-04636881-a3d7-4b3b-956f-994e59f9028e.png"
},
{name: "Sand Martin",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608846-9676a097-2c40-4980-8bd2-98d58f60b433.png"
},
{name: "Scrub Tanager",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608848-cba41771-efc2-42ae-9cb3-c9aba7cd7253.png"
},
{name: "Undulated Antpitta",
category: "Birds",
image:
  "https://user-images.githubusercontent.com/122947570/236608850-568668d4-7aa7-4010-9464-329a00d95ccd.png"
},

// FISHES
{name: "Astroblepus",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609197-7b000b02-759a-4e25-b62e-51c41a3f9726.png"
},
{name: "Astyanax  Microlepis",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609198-bafb6d80-f35b-4326-b16d-e9b32e5a7e38.png"
},
{name: "Bocachico",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609200-6610f00d-f716-4657-b978-5d3fe67bc67d.png"
},
{name: "Chaetostoma Fischeri",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609201-f050c0e5-27f5-4ab6-83af-d0033d773539.png"
},
{name: "Hypsiboas Pugnax",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609202-27122470-aa05-4b73-9d3a-8da4ae96fa9a.png"
},
{name: "La Carpa",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609203-f7abdb85-cda3-472e-928f-9575dee8b75c.png"
},
{name: "Microgenys Minuta",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609204-ef0cb331-39f4-45d7-ad0d-f9fc2d4b1274.png"
},
{name: "Oncorhynchus",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609205-8cffcfd3-5b44-43c2-a790-404eef1cbe13.png"
},
{name: "Parodon Caliensis Lectotype",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609206-10796cdf-b2e8-4db0-9f35-980a869afa7e.png"
},
{name: "Pimelodus Clarias",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609207-4ec19a6d-5c6b-4620-bee7-2b605e2a0511.png"
},
{name: "Pseudopimelodus Schultzi",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609209-902f670b-e494-4295-aa2e-cf11493d5b6d.png"
},
{name: "Rio Cauca Caecilian",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609210-4c8350ca-a635-4e37-a23c-3bd9e96443ec.png"
},
{name: "Scinax Ruber",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609211-77bc020d-3939-4e2e-9736-52d4dbf7ec4f.png"
},
{name: "Tilapia",
category: "Fishes",
image:
  "https://user-images.githubusercontent.com/122947570/236609212-edd016d9-b595-4df1-ba77-ca19f69206bd.png"
},
];

//---------- RENDER Elements TO PAGE
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
    // append fish image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(category)
    card.appendChild(image)
}
};
renderDataToPage(data);

//---------- FILTER elements BY category
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

    const filterValue = event.target.getAttribute('data-filter') // Fish

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
  let elements= event.getElementsByClassName('card')
    elements[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    elements[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px'
    event.preventDefault();
    return false
}

// select all the cards
let card = document.getElementsByClassName('card');
// iterated over each of them
for (var i = 0; i < card.length; i++) {
  card[i].addEventListener('dragstart', dragStartHandler, false);
  // document.body.addEventListener('dragover', dragOverHandler, false);
  // document.body.addEventListener('drop', dropHandler, false);
  dropzone.addEventListener('dragover', dragOverHandler, false);
  dropzone.addEventListener('drop', dropHandler, false);
}
