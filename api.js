const express = require("express");
const cors = require("cors");
const productRouter = require("./Routes/products");
const productData = require("./data/products.json");
const app = express();

//setup our server
app.use(cors());
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //passing product data into hbs file
  res.render("index", { productData });
});

// app.get('/css/index.css', (req,res)=>{
//     res.sendFile(__dirname+'/css/index.css');
// })
// app.get('/',(req,res)=>{
//     res.send("WELCOME TO ECOMMERCE API")
// })

app.use("/api/products", productRouter);

app.listen(4040, () => {
  console.log("SEREVER STARTED AT 4020");
});
