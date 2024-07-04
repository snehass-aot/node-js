const express = require('express');
const app = express();
const router = require('./router/routes');



app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
