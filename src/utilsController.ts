import { Request, Response } from "express";
import mongoose from "mongoose";
import { readFile } from "fs/promises";

import { schema } from "./order";

const orderConnection = mongoose.connect("mongodb://localhost:27017/ABE02");
const OrderModel = mongoose.model("Order", schema);

const bootstrap = async (req: Request, res: Response) => {
  await OrderModel.deleteMany({}).exec();

  let orders = await readFile("../assets/MOCK_DATA_MATERIALS.json", "utf-8");
  let ordersResult = await OrderModel.insertMany(JSON.parse(orders));

  res.json({
    orders: {
      ids: ordersResult.map((t) => t._id),
      cnt: ordersResult.length,
    },
  });
};

export const Utils = {
  bootstrap,
};
