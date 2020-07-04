console.log('initial setup done Notes App')

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const body = document.querySelector('body')
const paragraph = document.createElement('p')
paragraph.textContent = "This is the new paragraph add via DOM"

body.append(paragraph)

