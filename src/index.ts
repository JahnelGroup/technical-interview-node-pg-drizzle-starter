import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from TypeScript backend!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
