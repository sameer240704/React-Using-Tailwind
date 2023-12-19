const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const uri = "mongodb://localhost:27017/tailwind";
const client = new MongoClient(uri);

const PORT = 4000;
app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  else console.log(`Server listening to PORT ${PORT}`);
});

client
  .connect()
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
