const express = require('express');
const app = express();
const errorsController = require('./controllers/errors');
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.use(errorsController.get404Page);


app.listen(3000, () => {
    console.log('listening on port 3000');
});
