const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('../Server/routes/person.routes')(app);
require('../Server/controllers/person.controler');
app.listen(8000, () => {
    console.log("Listening at Port 8000");
});