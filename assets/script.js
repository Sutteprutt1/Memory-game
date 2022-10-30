
// Spille pladen (board) lavet på arrays med billeder 
const cardArray = [
    {
        name: 'nøgler',
        img: 'img/watermelon.webp'
    },
    {
        name: 'Rumskib',
        img: 'img/dog.jpg'
    },
    {
        name: 'røver',
        img: 'img/fishing.jpg'
    },
    {
        name: 'bananer',
        img: 'img/sailor.jpg'
    },
    {
        name: 'spilleconsol',
        img: 'img/baker.jpg'
    },
   
    {
        name: 'nøgler',
        img: 'img/watermelon.webp'
    },
    {
        name: 'Rumskib',
        img: 'img/dog.jpg'
    },
    {
        name: 'røver',
        img: 'img/fishing.jpg'
    },
    {
        name: 'bananer',
        img: 'img/sailor.jpg'
    },
    {
        name: 'spilleconsol',
        img: 'img/baker.jpg'
    },
 
    
  

    
]

//blander array'et - kortene bliver blandet ved reloade så det er tilfældig rækkefølge
cardArray.sort(() => 0.3 - Math.random())

// Griber fat i div element der findes i html / grid containeren til spillepladen
const display = document.getElementById('grid')

let result = document.querySelector('#score')
let cardChoice = []
let cardChoiceId = []
const cardCol = []


function createBoard () {
    for( let x = 0; x < cardArray.length; x++) {
       const card = document.createElement('img')
    card.setAttribute('src', 'img/background.png')
    card.setAttribute('data-id', x)
    
    card.addEventListener('click', flipCard)
    
    display.appendChild(card)
    }
}
createBoard()
function scoreCount(){
    result.addEventListener('click')
}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChoiceId[0]
    const optionTwoId = cardChoiceId[1]


     if(optionOneId == optionTwoId){
        alert('Du klikker altså på den samme')
        
     }
    
    if( cardChoice[0] == cardChoice[1]){
        alert('Du fandt en!');


        cards[optionOneId].setAttribute('src', 'img/background-match.png')
        cards[optionTwoId].setAttribute('src', 'img/background-match.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        

        cardCol.push(cardChoice)
    }else {
        cards[optionOneId].setAttribute('src', 'img/background.png')
        cards[optionTwoId].setAttribute('src', 'img/background.png')
        alert('sowwy. Try agan')
    }
    result.textContent = cardCol.length
    
    cardChoice = []
    cardChoiceId = []

    if(cardCol.length == cardArray.length/2){
        result.textContent = 'Tillykke - du er nu en master'
    }

} 




function flipCard() {
    console.log(cardArray)
   const cardId = this.getAttribute('data-id')
   cardChoice.push(cardArray[cardId].name)
   cardChoiceId.push(cardId)
   console.log('cardChoice')
   console.log('cardChoiceid')
this.setAttribute('src', cardArray[cardId].img)
if(cardChoice.length === 2){
    setTimeout(checkMatch, 500)
}
}