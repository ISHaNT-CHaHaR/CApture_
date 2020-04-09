const express = require('express');

const app = express(); // app have all the functionality of express now.
app.listen(8000, () => {
   console.log('listening at 8000');
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
// anything in this folder in publicaly acceptable by url/

app.post('/api', (req, res) => {
   console.log(req.body);
   console.log('I got a request.');
   res.json({
      status: 'success',
      latitude: req.body.lat,
      longitude: req.body.long,
   });
});
