import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/a", (req, res) => {
  res.status(200).send({ name: "Harsha" });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
