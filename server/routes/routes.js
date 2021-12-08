import express from "express";
const router = express.Router();
import {
  createItem,
  listItems,
  findItem,
  loadItems,
  updateEntry,
  addEntry,
  deleteEntry,
} from "../controllers/controller.js";

// Create a new item
router.post("/createItem", createItem);

// List all items
router.get("/listItems", listItems);

// use endpoint to search for items
router.get("/findItem/:query", findItem);

// only use once to load all data into the database
router.get("/loadItems", loadItems);

// edit item in database
router.post("/editItem", updateEntry);

// add item to database
router.post("/addItem", addEntry);

router.post("/deleteItem", deleteEntry);

export default router;
