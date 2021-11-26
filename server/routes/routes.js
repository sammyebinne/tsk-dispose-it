import express from "express";
const router = express.Router();
import {
  createItem,
  listItems,
  findItem,
  loadItems,
} from "../controllers/controller.js";

router.get("/loadItems", loadItems);
router.get("/findItem", findItem);

export default router;
