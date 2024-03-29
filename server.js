const express = require('express')
const routes = require('./routes/htmlroutes')
const apiroutes = require('./routes/apiroutes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes);
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));