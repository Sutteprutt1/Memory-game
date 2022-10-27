const cardArray = [
    {
        name: 'nøgler',
        img: 'img/dog.jpg'
    },
    {
        name: 'Rumskib',
        img: 'img/dog.jpg'
    },
    {
        name: 'røver',
        img: 'img/dog.jpg'
    },
    {
        name: 'bananer',
        img: 'img/dog.jpg'
    },
    {
        name: 'spilleconsol',
        img: 'img/dog.jpg'
    },
    {
        name: 'hundesnor',
        img: 'img/dog.jpg'
    },
    {
        name: 'SuperKræft',
        img: 'img/dog.jpg'
    },
    {
        name: 'Isvafler',
        img: 'img/dog.jpg'
    },
    {
        name: 'Trommer',
        img: 'img/dog.jpg'
    },
    {
        name: 'spade',
        img: 'img/dog.jpg'
    },
]

//blander array'et - kortene bliver blandet ved reloade
cardArray.sort(() => 0.3 - Math.random())


const display = document.getElementById('grid')

function createBoard () {
    for( let i = 0; i < 10; i++) {
       const card = document.createElement('img')
card.setAttribute('src', 'img/dog.jpg')
card.setAttribute('data-id', i)
display.appendChild(card)
    }
}
createBoard()
