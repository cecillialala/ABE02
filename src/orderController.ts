import { Request, Response } from "express";
import mongoose from "mongoose";
import { schema } from "./order";

const orderConnection = mongoose.connect("mongodb://localhost:27017/ABE02");
const OrderModel = mongoose.model("Order", schema);

const list = async (req: Request, res: Response) => {
  let result = await OrderModel.find({}).lean().exec();
  res.json(result);
};

const read = async (req: Request, res: Response) => {
  const { uid } = req.params;
  let result = await OrderModel.find({ _id: uid });
  res.json(result);
};

const create = async (req: Request, res: Response) => {
  let { id } = await new OrderModel(req.body).save();
  res.json({ id });
};

const overwrite = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const body = req.body;
  let result = await OrderModel.findOne({ _id: uid }, { __v: 0 }).exec();
  if (result) {
    let resp = result.overwrite(body);
    res.json(resp);
  } else {
    res.sendStatus(404);
  }
};

const update = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const body = req.body;
  let result = await OrderModel.updateOne({ _id: uid }, { $set: body }).exec();
  res.json({ uid, result });
};

const remove = async (req: Request, res: Response) => {
  const { uid } = req.params;
  let result = await OrderModel.deleteOne({ _id: uid });
  res.json(result);
};

export const Orders = {
  list,
  read,
  create,
  overwrite,
  update,
  remove,
};
