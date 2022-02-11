import express from "express";
import { orders } from "./orderRouter";
import { routerFiles } from "./routerFiles";
const app = express();
const port = 3000;

//app.use("/orders", routerFiles);
//app.use("/orders/:uid", routerFiles);

app.use(express.json());
app.use("/orders", orders);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
