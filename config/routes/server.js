import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(bodyParser.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
