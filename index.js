const express = require('express');

const Datastore = require('nedb');

const app = express(); // app have all the functionality of express now.
app.listen(8000, () => {
   console.log('listening at 8000');
});

app.use(express.static('public')); // anything in this folder in publicaly acceptable by url/
app.use(express.json({ limit: '1mb' })); // for json parsing..

const database = new Datastore('database.db'); // g9iving a name to DB

database.loadDatabase(); //Itb creates that file for DB

// database.insert({
//    /// adding data to database file
//    name: 'anyone',
//    status: ' hi',
// });

// database.insert({
//    name: 'chahar',
//    status: 'rich in fat!',
// });

app.post('/api', (req, res) => {
   console.log(req.body);
   console.log('I got a request.');

   const data = req.body;
   const timestamp = Date.now();
   data.timestamp = timestamp;

   database.insert(data);

   res.json({
      status: 'success',
      timestamp: timestamp,
      latitude: req.body.lat,
      longitude: req.body.long,
   });
});
