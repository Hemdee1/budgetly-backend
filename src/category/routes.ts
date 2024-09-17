import express from "express";
import * as categoryController from "./controller";

const router = express.Router();

router.post("/create-category", categoryController.createCategory);

router.post("/update-category", categoryController.updateCategory);

router.get("/get-categories", categoryController.getCategories);

export default router;
