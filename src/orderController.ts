import { Request, Response } from "express";
import mongoose from "mongoose";
import { schema } from "./order";

const orderConnection = mongoose.connect("mongodb://localhost:27017/ABE02");
const OrderModel = mongoose.model("Order", schema);
