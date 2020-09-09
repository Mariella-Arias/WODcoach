const express = require('express');
const app = express();
const cors = require('cors');
const port = 4040;

//middleware
app.use(express.static('./client/dist'));
app.use(cors());

//routes

//listen
app.listen(port, (err) => {
  if (err) {
    console.log(`Unable to listen on port ${port}`)
  } else {
    console.log(`app listening at http://localhost:${port}`);
  }
});

