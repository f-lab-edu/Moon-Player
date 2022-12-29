const { MongoClient } = require("mongodb");
require('dotenv').config()


const CONNECTION_URI=process.env.MONGODB_CONNECTION_URI
const client=new MongoClient(CONNECTION_URI,{useNewUrlParser:true})

const connectDB=async ()=>{
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("sample_guides");
        const coll = db.collection("planets");
        // find code goes here
        const cursor = coll.find();
        // iterate code goes here
        await cursor.forEach(console.log);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}
module.exports=connectDB