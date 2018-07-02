module.exports = (app) => {
    const notes = require('../controllers/note.controller');

    // create new note
    app.post('/notes', notes.create);

    // retrieve all Notes
    app.get('/notes', notes.findAll);

    // retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // update a note with noteId
    app.put('/notes/:noteId', notes.update);

    // delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}