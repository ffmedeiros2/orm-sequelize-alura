const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

const port = 3000;

routes(app);

app.listen(port, () => console.log(`Servidor está ouvindo na porta ${port}`));

module.exports = app;
