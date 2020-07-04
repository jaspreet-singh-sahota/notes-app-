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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const result = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const divParagraph = document.querySelector('#notes')
    divParagraph.innerHTML = ''
    
    result.forEach(item => {
      const p = document.createElement('p')
      p.textContent = item.title
      divParagraph.appendChild(p)
    })
}

renderNotes(notes, filters)

document.querySelector('#add-button').addEventListener('click', function (e) {
    console.log(e.target.textContent = 'Click here');
})

document.querySelector('#remove-button').addEventListener('click', function (e) {
    document.querySelectorAll('.notes').forEach(note => {
        note.remove();
    })
})

document.querySelector('#search-input').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})
