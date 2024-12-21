import express from "express"; //importing express
import dotenv from "dotenv"; //importing dotenv

import userRoutes from "./routes/userRoutes.js"; //importing userRoutes from userRoutes.js 
import authRoutes from "./routes/authRoutes.js"; //importing authRoutes from authRoutes.js 
import adminRoutes from "./routes/adminRoutes.js"; //importing adminRoutes from adminRoutes.js 
import songRoutes from "./routes/songRoutes.js"; //importing songRoutes from songRoutes.js 

dotenv.config(); // to be able to use dotenv file

const app = express(); //creating an app
const PORT = process.env.PORT; //fetching value of PORT from .env file

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);


app.listen(PORT, () => {
    console.log("server running on PORT " + PORT);
})