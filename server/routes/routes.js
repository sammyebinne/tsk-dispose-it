import express from "express";
const router = express.Router();
import {
  createItem,
  listItems,
  findItem,
  loadItems,
} from "../controllers/controller.js";

// Create a new item
router.post("/createItem", createItem);

// List all items
router.get("/listItems", listItems);

// use endpoint to search for items
router.get("/findItem/:query", findItem);

// only use once to load all data into the database
router.get("/loadItems", loadItems);

export default router;
