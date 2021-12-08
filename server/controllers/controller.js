import DisposeGuide from "../models/disposeGuide.js";
import disposeData from "../temp/database.js";

async function createItem(itemData) {
  try {
    const item = new DisposeGuide(itemData);
    await item.save();
    console.log(`created new item with id: ${createdItem.id}`);
  } catch (err) {
    console.log(err.message);
  }
}

async function listItems(req, res) {
  try {
    const items = await DisposeGuide.find();
    res.json(items);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function findItem(req, res) {
  let query = {};
  if (req.params.query) {
    query.$or = [
      { category: { $regex: req.params.query, $options: "i" } },
      { keywords: { $regex: req.params.query, $options: "i" } },
    ];
  }

  try {
    const items = await DisposeGuide.find(query)
      .populate("category")
      .sort({ votes: -1 });
    res.json(items);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function loadItems(req, res) {
  const data = disposeData;
  const dataLength = data.length;
  try {
    const result = await DisposeGuide.insertMany(data);
    if (result.length === dataLength)
      console.log("All items added to database");
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateEntry(req, res) {
  console.log(req.body);
  let updatedEntry = await DisposeGuide.findOneAndUpdate(
    {
      category: req.body.category,
    },
    req.body
  );
  res.json(updatedEntry);
}

export { createItem, listItems, findItem, loadItems, updateEntry };
