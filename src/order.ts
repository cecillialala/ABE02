import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Order {
  material: string;
  amount: number;
  currency: number;
  price: number;
  timestamp: string;
  delivery: {
    first_name: string;
    last_name: string;
    address: {
      street_name: string;
      street_number: number;
      city: string;
    };
  };
}

export const schema = new Schema<Order>({
  material: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: Number, required: true },
  price: { type: Number, required: true },
  timestamp: { type: String, required: true },
  delivery: {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    address: {
      street_name: { type: String, required: true },
      street_number: { type: Number, required: true },
      city: { type: String, required: true },
    },
  },
});
