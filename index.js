const express = require('express');

const app = express(); // app have all the functionality of express now.
app.listen(8000, () => {
   console.log('listening at 8000');
});

app.use(express.static('public')); // anything in this folder in publicaly acceptable by url/
