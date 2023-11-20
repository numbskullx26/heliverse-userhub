const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 8080;

// Replace with your MongoDB URI
const mongoURI =
  "mongodb+srv://indrajeet26:indrajeet26@cluster0.sjofxbt.mongodb.net";

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();
  console.log("Client connected");
  const db = await client.db("UserHub");

  const peopleCollection = db.collection("peopleCollection");

  app.get("/getById/:firstName", async (req, res) => {
    try {
      const { firstName } = req.query;
      const data = await peopleCollection.find({ first_name: firstName }).toArray();

      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// const mySchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   avatar: {
//     type: String,
//     required: true,
//   },
//   domain: {
//     type: String,
//     required: true,
//   },
//   available: {
//     type: Boolean,
//     required: true,
//   },
// });

// // app.get('/data', async (req, res) => {
// //     try {
// //         const data = await YourModel.find();
// //         res.json(data);
// //     } catch (err) {
// //         res.status(500).send(err.message);
// //     }
// // });

// const peopleCollection = mongoose.model("peopleCollection", mySchema);
