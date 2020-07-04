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

document.querySelector('#add-button').addEventListener('click', function (e) {
    console.log(e.target.textContent = 'Click here')
})

document.querySelector('#remove-button').addEventListener('click', function (e) {
    document.querySelectorAll('.notes').forEach(note => {
        note.remove()
    })
})
