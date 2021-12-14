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
  // this will return exact category matches only. Case insensitive.

  let query = req.params.query;
  let searchResults = [];
  let exactCategory = await DisposeGuide.findOne({
    category: { $regex: new RegExp("^" + query + "$", "i") },
  });
  if (exactCategory) {
    searchResults.push(exactCategory);
  };

  let exactKeyword = await DisposeGuide.findOne({
    keywords: { $regex: new RegExp("^" + query + "$", "i") },
  });
  if (exactKeyword) {
    searchResults.push(exactKeyword);
  };

  let partialCategory = await DisposeGuide.find({
    category: { $regex: new RegExp("^" + query, "i") },
  });
  if (partialCategory) {
    searchResults.push(...partialCategory);
  };

  let partialKeyword = await DisposeGuide.find({
    keywords: { $regex: new RegExp("^" + query, "i") },
  });
  if (partialKeyword) {
    searchResults.push(...partialKeyword);
  };

  // if no exact category match, seaches keywords for exact matches and returns one
  // if (!searchResult) {
  //   searchResult = await DisposeGuide.findOne({
  //     keywords: { $regex: new RegExp("^" + query + "$", "i") },
  //   });
  //   if (searchResult) {
  //     return res.json([searchResult]);
  //   }
  // }
  // if (searchResult.category.toLowerCase() === query.toLowerCase()) {
  //   return res.json(searchResult);
  // }
  return res.json(searchResults);
  
  // let query = {};
  // if (req.params.query) {
  //   query.$or = [
  //     { category: { $regex: req.params.query, $options: "i" } },
  //     { keywords: { $regex: req.params.query, $options: "i" } },
  //   ];
  // }

  // try {
  //   const items = await DisposeGuide.find(query)
  //     .populate("category")
  //     .sort({ votes: -1 });
  //   res.json(items);
  // } catch (err) {
  //   res.status(404).json({ message: err.message });
  // }
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

async function addEntry(req, res) {
  try {
    let addedEntry = new DisposeGuide(req.body);
    await addedEntry.save();
    console.log(`created new item with id: ${addedEntry.id}`);
    res.json(addedEntry);
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteEntry(req, res) {
  try {
    let deletedEntry = await DisposeGuide.findOneAndDelete({
      category: req.body.category,
    });
    console.log(`deleted item: ${deletedEntry}`);
    res.json(deletedEntry);
  } catch (err) {
    console.log(err.message);
  }
}

export {
  createItem,
  listItems,
  findItem,
  loadItems,
  updateEntry,
  addEntry,
  deleteEntry,
};
