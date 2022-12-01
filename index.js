const express = require('express');
const app = express();


app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
	res.redirect('/api/bookmarks');
});

/* START CONTROLLERS HERE */
const bookmarksController = require('./controllers/bookmarksController');
app.use('/api/bookmarks/', bookmarksController);
const usersController = require('./controllers/usersController');
app.use('/api/users/', usersController);
/* END CONTROLLERS HERE */

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
