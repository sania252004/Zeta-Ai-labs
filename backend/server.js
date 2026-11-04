const express = require("express");
const cors = require("cors");
require("dotenv").config();

const chatRoutes = require("./routes/chatRoutes");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
connectDB();
app.use(express.json());

// Mount API routes under /api
app.use("/api", chatRoutes);
app.use("/api",contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Zeta Enterprise Server running on port ${PORT}`);
});