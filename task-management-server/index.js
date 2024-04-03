require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors());
app.use(express.json());


// JWT Verify Token
const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }
    // bearer token
    const token = authorization.split(" ")[1];
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ error: true, message: "unauthorized access" });
      }
      req.decoded = decoded;
      next();
    });
  };



const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.sktmpwb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {

  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const dbConnect = async () => {
  try {
    client.connect();
    console.log(" Database Connected Successfully✅ ");
  } catch (error) {
    console.log(error.name, error.message);
  }
}
dbConnect()


const TaskCollection = client.db("TaskManagementDB").collection("task");
const UserCollection = client.db("TaskManagementDB").collection("users");


app.get('/', (req, res) => {
  res.send('Lets ready for task!')
})

//user collection

app.get('/users', async (req, res) => {
    const result = await UserCollection.find().toArray();
    res.send(result);
  })
  

app.post('/users', async (req, res) => {
    const body = req.body;
    console.log(body);
    const result = await UserCollection.insertOne(body);
    res.send(result);
  })

// task collection
app.post('/task', async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await TaskCollection.insertOne(body);
  // res.send(result);
  if (result?.insertedId) {
    return res.status(200).send(result);
  } else {
    return res.status(404).send({
      message: "can not insert try again later",
      status: false,
    });
  }
})

app.get('/task', async (req, res) => {
  const result = await TaskCollection.find().toArray();
  res.send(result);
})

app.get('/task/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await TaskCollection.findOne().toArray();
      res.send(result);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//my task added
app.get("/task/:email", async (req, res) => {
  console.log(req.params.email);
  const result = await TaskCollection.find({ email: req.params.email }).toArray();
  res.send(result);
})


//search text
app.get('/searchText/:text', async (req, res) => {
  const text = req.params.text;
  const result = await TaskCollection
    .find({
      $or: [
        { title: { $regex: text, $options: "i" } },
      ],
    })
    .toArray();
  res.send(result);
});

//edit start

//get single details data from all data
app.get('/allSocialPost/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }
  const result = await TaskCollection.findOne(query);
  res.send(result);
})

//get for update or edit the task by selecting id
app.get("/editTask/:id", async (req, res) => {
  const id = (req.params.id);
  const query = { _id: new ObjectId(id) }
  const result = await TaskCollection.findOne(query);
  res.send(result);
})


//delete the task by selecting id
app.delete("/task/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }
  const result = await TaskCollection.deleteOne(query);
  res.send(result);
})


//update data in server
app.patch("/task/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(body);
  const filter = { _id: new ObjectId(id) };
  const option = { upsert: true }
  const updateDoc = {
    $set: {
      title: body.title,
      name:body.name,
      date: body.date,
      email: body.email,
      description: body.description
    }
  };
  const result = await TaskCollection.updateOne(filter, updateDoc, option);
  res.send(result);
});


app.listen(port, () => {
    console.log(`Lets run the Task server site on port : ${port}`)
  })