const getSavedNotes = () => {
    const notesJson = localStorage.getItem('notes');
    if (notesJson !== null) {
        return JSON.parse(notesJson);   
    } else {
        return []
    }  
}

const filters = {
    searchText: ''
}

const notes = getSavedNotes()

const renderNotes = function (notes, filters) {
    const result = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });

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
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters)
    e.target.elements.titleText.value = '';
    e.target.elements.noteText.value = ''
})

document.querySelector('#search-input').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)

})

document.querySelector('#dropdown').addEventListener('change', (e) => {
    console.log(e.target.value);
})
