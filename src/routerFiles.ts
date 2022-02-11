import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello get");
});
router.post("/", (req, res) => {
  res.send("hello post");
});
router.get("/:uid", (req, res) => {
  res.send("hello uid get");
});
router.put("/:uid", (req, res) => {
  res.send("hello uid put");
});
router.patch("/:uid", (req, res) => {
  res.send("hello uid patch/update");
});
router.delete("/:uid", (req, res) => {
  res.send("hello uid delete");
});

// router.get("/orders", Transactions.list);
// router.post("/orders", Transactions.create);
// router.get("/orders/:uid", Transactions.read);
// router.put("/orders/:uid", Transactions.overwrite);
// router.patch("/orders/:uid", Transactions.update);
// router.delete("/orders/:uid", Transactions.remove);

export const routerFiles = router;
