import { createItem } from "./disposeGuide.js";
import disposeData from "./database.js";

const loadItems = async () => {
  for (let item of disposeData) {
    console.log("added category " + item.category);
    await createItem(item);
  }
};

// uncomment to load entries from database.js into your MongoDB database
// loadItems();
