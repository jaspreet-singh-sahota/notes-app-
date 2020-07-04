console.log('initial setup done Notes App')

const body = document.querySelector('body')
const paragraph = document.createElement('p')
paragraph.textContent = "This is the new paragraph add via DOM"

body.append(paragraph)

