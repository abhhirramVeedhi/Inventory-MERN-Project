const express = require('express')
const mongoose =require('mongoose')
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken")
const cookieParser =require('cookie-parser')
const UserModel =require('./models/Users')
const app = express()
const port = process.env.PORT || 4002
const cors = require('cors')

app.get("/",(req,res)=>{
  res.setHeader("Access-Control-Allow-Credentials",true)
  res.send("API is Running...");

});

app.use(cors({
  origin: "https://inventory-mern-project-lu4g.vercel.app",
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "FETCH"],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://merninventory:1234@cluster0.crecm1z.mongodb.net/Inventory')
const varifyUser =(req,res,next) =>{
    const token =req.cookies.token;
    if(!token) {
        return res.json("Token is missing")
    }
    else{
        jwt.verify(token, "jwt-secret-key",(err, decoded) =>{
            if(err){
                return res.json("Error with token")
            }
            else{
                if(decoded.role === "admin"){
                    next()
                }
                else{
                    return res.json("not admin")
                }
            }

        })

    }
}

app.get('/admin/dashboard',varifyUser,(req,res)=>{
  res.json("Success")
})


app.post('/register',(req,res)=>{
  const {name,email,password} =req.body;
  bcrypt.hash(password, 10)
  .then(harsh=>{
      UserModel.create({name,email,password: harsh})
      .then(user => res.json("success"))
      .catch(err => res.json(err))
  }).catch(err => res.json(err));

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/login', (req,res)=>{
  const {email,password} = req.body;
  UserModel.findOne({email :email})
  .then(user =>{
      if(user){
          bcrypt.compare(password,user.password,(err,response)=>{
              if(response){
                  const token =jwt.sign({email: user.email,role: user.role},
                      "jwt-secret-key", {expiresIn:'1d' })
                      res.cookie('token',token)
                      return res.json({Status:"Success", role:user.role})
              }else{
                  return res.json("password is incorrect")

              }
          })

      }else{
          return res.json("No record found")
      }
  })


});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
});


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://merninventory:1234@cluster0.crecm1z.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const store = client.db("Inventory").collection("gadgets");

    //insert gadgets
    app.post("/upload-product",async(req,res)=>{
        const data = req.body;
        const result = await store.insertOne(data);
        res.send(result);
    })

    //get
     app.get("/view-product", async (req, res) => {
      const gadgets = await store.find().toArray();
      res.setHeader('Access-Control-Allow-Origin', 'https://inventory-mern-project-lu4g.vercel.app');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.json(gadgets);
    });

    //update
    app.patch("/update-product/:id",async(req,res)=>{
        const id =req.params.id;
        // console.log(id);
        const updateProductData = req.body;
        const filter ={_id: new ObjectId(id)};
        const options ={upsert : true};
        const updateDoc = {
            $set: {
                ...updateProductData
            }
    }
    const result = await store.updateOne(filter,updateDoc,options);
    res.send(result);

    })

    //delete
    app.delete("/delete-product/:id" , async(req,res)=>{
        const id =req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await store.deleteOne(filter);
        res.send(result);
    })

    //find by Brand 
    app.get('/searchByBrand', async (req, res) => {
        let query = {};
        if(req.query?.brand){
            query={brand: req.query.brand}
        }
        const result = await store.find(query).toArray();
        res.send(result);
    })

    //find by category 
    app.get('/searchByCategory', async (req, res) => {
        let query = {};
        if(req.query?.Brand){
            query={category: req.query.category}
        }
        const result = await store.find(query).toArray();
        res.send(result);
    })

    //find by product name 
    app.get('/searchByPName', async (req, res) => {
        let query = {};
        if(req.query?.productName){
            query={productName: req.query.productName}
        }
        const result = await store.find(query).toArray();
        res.send(result);
    })

    //find by Id
    app.get('/searchById/:id', async (req, res) => {
        const id = req.params.id;
      
        try {
          const product = await store.findOne({ _id: new ObjectId(id) });
      
          if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
          }
      
          res.json(product);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
    
    


    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})

