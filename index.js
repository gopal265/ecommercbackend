import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/order.js"
import productRoutes from "./routes/product.js"
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend domain
    credentials: true, // Allow cookies and other credentials
    exposedHeaders: ["set-cookie"],
  };

app.use(express.json())
app.use(cookieParser());

app.use(bodyParser.json({limit: "20mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb",extended:true}));

app.use(cors(corsOptions));



app.use('/auth',authRoutes)
app.use('/order',orderRoutes)
app.use('/products',productRoutes)


let port = process.env.PORT || 5000;
const connection_Url = process.env.CONNECTION_URL

mongoose.connect('mongodb+srv://gopal265reddy:dgr2605@ecommerce.wokf9ue.mongodb.net/?retryWrites=true&w=majority')
.then(() =>
    app.listen(port, () =>{
    console.log(`Server started at port : ${port}`)
    }))
.catch((err) => console.log(err))


