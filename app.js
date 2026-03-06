import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "Server running" });
});
 app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})