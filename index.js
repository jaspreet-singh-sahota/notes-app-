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

const removeNote = (id) => {
    const noteId = notes.findIndex(note => note.id === id);

    if (noteId !== -1) {
        notes.splice(noteId, 1)
    }
}

const renderNotes = function (notes, filters) {
    const result = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    const divParagraph = document.querySelector('#notes');
    divParagraph.innerHTML = ''
    
    result.forEach(item => {
        const div = document.createElement('div');
        const p = document.createElement('span');
        const removeButton = document.createElement('button')
        
        removeButton.addEventListener('click', function () {
            removeNote(item.id)
            saveNotes(notes)
            renderNotes(notes, filters)
        })

        removeButton.textContent = 'X'
        p.textContent = item.title
        divParagraph.appendChild(div);
        div.appendChild(p);
        div.appendChild(removeButton);
    })
}

renderNotes(notes, filters)

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

document.querySelector('#notes-form').addEventListener('submit', function (e) {
    e.preventDefault();
    notes.push({
        id: uuidv4(),
        title: e.target.elements.titleText.value,
        body: e.target.elements.noteText.value,
    })
    saveNotes(notes)
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
