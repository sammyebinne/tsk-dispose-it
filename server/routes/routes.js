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
import { signup, login, logout } from "../controllers/authController.js";
import auth from "../middleware/auth.js";

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

// delete item from database
router.post("/deleteItem", deleteEntry);

// fuzzy search
router.get("/fuzzySearch/:query", findItem);
router.get("/fuzzySearch", () => []);

// authentication routes
router.post("/auth/signup", signup);
router.post("/auth/login", login);
router.get("/auth/logout", logout);

export default router;
