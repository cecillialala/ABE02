import { Router } from "express";
import { Order } from "./order";
import { Orders } from "./orderController";

const router = Router();

router.get("/", Orders.list);
router.post("/", Orders.create);
router.get("/:uid", Orders.read);
router.put("/:uid", Orders.overwrite);
router.patch("/:uid", Orders.update);
router.delete("/:uid", Orders.remove);

export const orders = router;
