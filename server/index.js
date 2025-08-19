const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const compileRoute = require('./routes/compile');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Use compile route
app.use('/compile', compileRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
