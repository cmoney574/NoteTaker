const express = require('express')
const routes = require('./routes/htmlroutes')
const apiroutes = require('./routes/apiroutes')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiroutes);
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));