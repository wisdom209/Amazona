import express from "./node_modules/express";
import bodyParser from "./node_modules/body-parser";
import mongoose from "mongoose";
import dotenv from "./node_modules/dotenv";
import config from "./config";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productRoutes";
import cors from "./node_modules/cors";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json());

app.use(cors());

dotenv.config();

//const mongoDbUrl = config.mongoDbUrl;
const mongoDbUrl = process.env.MONGO_URI ||  "mongodb+srv://freezwiz:wizdoz@cluster0.fdboo.mongodb.net/shoppingcart?retryWrites=true&w=majority";

mongoose
    .connect(mongoDbUrl, {
        useCreateIndex     : true,
        useUnifiedTopology : true,
        useNewUrlParser    : true
    })
    .catch((err) => console.log(err));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log("Server now listening on port : " + PORT);
});
