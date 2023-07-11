const express = require('express');
const apiRouter = require('./api');
const { createTable } = require('./db');

const app = express();

createTable();

app.use(express.json());
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});