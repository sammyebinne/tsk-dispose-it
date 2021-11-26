import DisposeGuide from "../models/disposeGuide.js";

async function createItem(itemData) {
  try {
    const item = new DisposeGuide(itemData);
    await item.save();
    console.log(`created new item with id: ${createdItem.id}`);
  } catch (err) {
    console.log(err.message);
  }
}

async function listItems() {
  try {
    const items = await DisposeGuide.find();
    console.log(items);
    return items;
  } catch (err) {
    console.log(err.message);
  }
}

async function findItem(query) {
  console.log(query);
  let searchResult = await DisposeGuide.findOne({ category: query });

  if (searchResult) {
    console.log(`Found ${query} in categories`);
    return searchResult;
  }
  searchResult = await DisposeGuide.findOne({ keywords: query });
  if (searchResult) {
    console.log(`Found ${query} in keywords`);
  }
  return searchResult;
}

async function loadItems() {
  try {
    for (let item of disposeData) {
      console.log("added category " + item.category);
      await createItem(item);
    }
  } catch (err) {
    console.log(err.message);
  }
}

export { createItem, listItems, findItem, loadItems };
