import mongoose from "./db.js";

const disposeGuideSchema = new mongoose.Schema({
  category: { type: String, required: true },
  keywords: { type: Array, required: true },
  instruction: {
    heading1: { type: String, required: true },
    body1: {
      condition: { type: String, required: true },
      bin: { type: String, required: true },
    },
    heading2: { type: String, required: false },
    body2: {
      condition: { type: String, required: false },
      bin: { type: String, required: false },
    },
  },
  moreInfo: { type: Array, required: false },
  image: { type: Array, required: false },
  votes: { type: Number, required: false },
});

const DisposeGuide = mongoose.model("DisposeGuide", disposeGuideSchema);

async function createItem(itemData) {
  let newItem = new DisposeGuide(itemData);
  let createdItem = await newItem.save();
  console.log(`created new item with id: ${createdItem.id}`);
  return createdItem.id;
}

async function listItems() {
  return DisposeGuide.find({});
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

export { createItem, listItems, findItem };
