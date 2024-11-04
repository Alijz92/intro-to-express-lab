const express = require('express')
const app = express()

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name
  res.send(`What a delight it is to see you once more, ${name}.`)
})

app.get('/roll/:number', (req, res) => {
  const number = req.params.number
  const intNumber = parseInt(number)
  const randomNumber = Math.floor(Math.random() * intNumber)
  if (randomNumber) {
    res.send(`You rolled ${randomNumber}`)
  } else {
    res.send('You must specify a number')
  }
})

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

app.get('/collectibles/:index', (req, res) => {
  const index = req.params.index
  if (index == 0) {
    res.send(
      `So, you want the ${collectibles[0].name}? For ${collectibles[0].price}, it can be yours!`
    )
  } else if (index == 1) {
    res.send(
      `So, you want the ${collectibles[1].name}? For ${collectibles[1].price}, it can be yours!`
    )
  } else if (index == 2) {
    res.send(
      `So, you want the ${collectibles[2].name}? For ${collectibles[2].price}, it can be yours!`
    )
  } else {
    res.send(`This item is not yet in stock. Check back soon!`)
  }
})

const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]

app.get('/shoes', (req, res) => {
  const minPrice = parseInt(req.query.minPrice)
  const maxPrice = parseInt(req.query.maxPrice)
  const type = req.query.type

  const filteredShoesArray = shoes.filter((shoe) => {
    if (minPrice && shoe.price < minPrice) return false
    if (maxPrice && shoe.price > maxPrice) return false
    if (type && shoe.type !== type) return false
    return true
  })

  res.send(filteredShoesArray)
})

app.listen(3001, () => {
  console.log('Listening to 3001')
})
