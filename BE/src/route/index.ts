import express = require("express");
import { Request, Response } from "express";
import MathController from "../ESC/controllers/MathController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello world v1!");
});

router.get("/data", MathController.find);
router.delete("/delete/:id", MathController.delete);
router.post("/submit", MathController.create);
router.patch("/data/update/:id", MathController.update);

export default router;