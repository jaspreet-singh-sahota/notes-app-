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

document.querySelector('#notes-form').addEventListener('submit', function (e) {
    e.preventDefault();
    notes.push({
        title: e.target.elements.titleText.value,
        body: e.target.elements.noteText.value,
    })
    renderNotes(notes, filters)
    e.target.elements.titleText.value = '';
    e.target.elements.noteText.value = ''
})

document.querySelector('#search-input').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})
