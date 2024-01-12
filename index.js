import express from "express";
import userRoutes from "./userRoutes.js";
import process from "process";

const app = express();

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
