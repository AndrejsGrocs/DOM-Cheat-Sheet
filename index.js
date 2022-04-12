// Create div

const div = document.createElement('div')


// Add to div class wrapper

div.classList.add('wrapper')


// Put element in tag body

const body = document.querySelector('body')
body.appendChild(div)

//Create h1 header with text ' ' 
const header = document.createElement('h1')
header.textContent = 'This is Document Object Model'

//Add h1 before div with class wrapper

div.insertAdjacentElement("beforebegin", header)

// Create <ul> list

const ul = `
   <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
   
   </ul>
`

// Put li inside the class wrapper

div.innerHTML = ul


// Create image

const img = document.createElement('img')


// add source atribute  

img.src = 'https://upload.wikimedia.org/wikipedia/commons/0/01/Albula_Alps.jpg'

// add width 240// On button click delete the card form DOM structure
img.alt = 'Superman'

img.width = 240;

// Put image inside the element with class wrapper

div.appendChild(img)


// Using the HTML line create div class  with className pDiv + 2 paragraphs

const elemHTML = `<div class='pDiv'>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>

</>
`

// Put this div before ul element

const ulList = div.querySelector('ul')
ulList.insertAdjacentHTML('beforebegin', elemHTML)


// Add class text to the second paragraph
const pDiv = document.querySelector('.pDiv')
pDiv.children[1].classList.add('text')

console.log(pDiv.children)

console.log(pDiv)


//Delete 1st Paragraph

pDiv.firstElementChild.remove()

// Create function generateAutoCard
// which receiving 3 arguments: brand, color, year

const generateAutoCard = (brand, color, year) => {
    const curDate = new Date()
    const curYear = curDate.getFullYear()
    return `
    <div class = 'autoCard'>
   <h2>${brand.toUpperCase()} ${year}</h2>
   <p> Auto ${brand.toUpperCase()} - ${year} year. The auto age is - ${curYear-year} years.</p>
   <p>The color is: ${color}</p>
   <button type='button' class='btn'>Delete</button>
    </div>
    
    
    `;
}
// and returns back the layout

//<div class = 'autoCard>
//   <h2>BRAND YEAR</h2>
//   <p> AUto BRAND - YEAR year. The auto age is - YEARS years.</p>
//</div>
//
//
//
//

// Create new div with class autos

const carsDiv = document.createElement('div')
carsDiv.classList.add('autos')

// Create 3 auto cards using function generateAutoCards

const carsList = [
       {brand:'Tesla', year: 2015, color: 'red'},
       {brand:'Lexus', year: 2016, color: 'silver'},
       {brand:'Nissan', year: 2012, color: 'black'},
]


const carsHTML = carsList.map(car => {
       return generateAutoCard(car.brand, car.color, car.year)

}).join('')


//Put these 3 cards inside div with class autos

carsDiv.innerHTML = carsHTML


// Put div with class autos to DOM before the div with class wrapper

div.insertAdjacentElement('beforebegin', carsDiv)

// On button click delete the card form DOM structure


// 1. Select all the buttons
const buttons = document.querySelectorAll('.btn')


// 2.Create delete function

function handleClick(e){
     const currentButton = e.currentTarget
     
     currentButton.closest('.autoCard').remove()

}

// 3.Use a loop to put an event handler on each button

buttons.forEach(button => {
    button.addEventListener('click', handleClick)

})