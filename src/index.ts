import express from "express";
import { routerFiles } from "./routerFiles";

const app = express();
const port = 3000;

app.use("/orders", routerFiles);
app.use("/orders/:uid", routerFiles);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
