const express = require("express");
const app = express();
const cors = require("cors");
const port = 4040;

//middleware
app.use(express.static("./client/dist"));
app.use(cors());

//routes
app.get("/workout", (req, res) => {
  res.redirect("/");
});

//listen
app.listen(port, (err) => {
  if (err) {
    console.log(`Unable to listen on port ${port}`);
  } else {
    console.log(`app listening at http://localhost:${port}`);
  }
});
