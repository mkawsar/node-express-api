module.exports = (app) => {
    const notes = require('../controllers/note.controller');
    const checkAuth = require('../middleware/auth.check');

    // create new note
    app.post('/notes', checkAuth, notes.create);

    // retrieve all Notes
    app.get('/notes', checkAuth, notes.findAll);

    // retrieve a single Note with noteId
    app.get('/notes/:noteId', checkAuth, notes.findOne);

    // update a note with noteId
    app.put('/notes/:noteId', checkAuth, notes.update);

    // delete a Note with noteId
    app.delete('/notes/:noteId', checkAuth, notes.delete);
};
