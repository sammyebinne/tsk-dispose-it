import { useState } from "react";

const EditForm = ({ currentCategory, setIsEdit, search }) => {
  const [category, setCategory] = useState(currentCategory.category);
  const [keywords, setKeywords] = useState(currentCategory.keywords);
  const [heading1, setHeading1] = useState(() => {
    try {
      return currentCategory.instruction.heading1;
    } catch (error) {
      return currentCategory.category;
    }
  });
  const [condition1, setCondition1] = useState(
    currentCategory.instruction.body1.condition
  );
  const [bin1, setBin1] = useState(currentCategory.instruction.body1.bin);
  const [heading2, setHeading2] = useState(() => {
    try {
      return currentCategory.instruction.heading2;
    } catch (error) {
      return "";
    }
  });
  const [condition2, setCondition2] = useState(() => {
    try {
      return currentCategory.instruction.body2.condition;
    } catch (error) {
      return "";
    }
  });
  const [bin2, setBin2] = useState(() => {
    try {
      return currentCategory.instruction.body2.bin;
    } catch (error) {
      return "";
    }
  });
  const [moreInfo, setMoreInfo] = useState(() => {
    try {
      return currentCategory.moreInfo;
    } catch (error) {
      return [];
    }
  });
  const [image, setImage] = useState(() => {
    try {
      return currentCategory.image;
    } catch (error) {
      return [];
    }
  });

  const saveChanges = async (e) => {
    e.preventDefault();
    setIsEdit(false);
    let updatedEntry = await fetch("/editItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        keywords,
        instruction: {
          heading1,
          body1: {
            condition: condition1,
            bin: bin1,
          },
          heading2,
          body2: {
            condition: condition2,
            bin: bin2,
          },
        },
        moreInfo,
        image,
        votes: currentCategory.votes,
      }),
    });
    updatedEntry = await updatedEntry.json();
    console.log("updated entry:", updatedEntry);
    // if the category name was edited, add a new entry with new name and delete the old. This is a workaround.
    if (updatedEntry === null) {
      let addedEntry = await fetch("/addItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          keywords,
          instruction: {
            heading1: heading1,
            body1: {
              condition: condition1,
              bin: bin1,
            },
            heading2: heading2,
            body2: {
              condition: condition2,
              bin: bin2,
            },
          },
          moreInfo,
          image,
          votes: currentCategory.votes,
        }),
      });
      let deletedEntry = await fetch("/deleteItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: currentCategory.category,
        }),
      });
      deletedEntry = await deletedEntry.json();
      console.log("deleted entry:", deletedEntry);
      return search(addedEntry.category);
    }
    // this is a workaround for updating the page immediately to show changes.
    search(updatedEntry.category);
  };
  return (
    <form onSubmit={saveChanges} className="form-control">
      <label htmlFor="category">Category:</label>
      <input
        id="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <label htmlFor="keywords">
        Keywords (separate by semicolon + space):
      </label>
      <textarea
        id="keywords"
        type="text"
        value={keywords.join("; ")}
        onChange={(e) => setKeywords(e.target.value.split("; "))}
        style={{ height: 100, width: 400 }}
        rows="5"
      />
      <br />
      <label htmlFor="heading1">Heading 1:</label>
      <input
        id="heading1"
        type="text"
        value={heading1}
        onChange={(e) => setHeading1(e.target.value)}
      />
      <br />
      <label htmlFor="condition1">Condition 1:</label>
      <input
        id="condition1"
        type="text"
        value={condition1}
        onChange={(e) => setCondition1(e.target.value)}
      />
      <br />
      <label htmlFor="bin1">Bin 1:</label>
      <input
        id="bin1"
        type="text"
        value={bin1}
        onChange={(e) => setBin1(e.target.value)}
      />
      <br />
      <label htmlFor="heading2">Heading 2:</label>
      <input
        id="heading2"
        type="text"
        value={heading2}
        onChange={(e) => setHeading2(e.target.value)}
      />
      <br />
      <label htmlFor="condition2">Condition 2:</label>
      <input
        id="condition2"
        type="text"
        value={condition2}
        onChange={(e) => setCondition2(e.target.value)}
      />
      <br />
      <label htmlFor="bin2">Bin 2:</label>
      <input
        id="bin2"
        type="text"
        value={bin2}
        onChange={(e) => setBin2(e.target.value)}
      />
      <br />
      <label htmlFor="moreInfo">More Info (separate by ; + space):</label>
      <input
        id="moreInfo"
        type="text"
        value={moreInfo.join("; ")}
        onChange={(e) => setMoreInfo(e.target.value.split("; "))}
      />
      <br />
      <label htmlFor="image">Image(s) (separate by comma + space):</label>
      <input
        id="image"
        type="text"
        value={image.join(", ")}
        onChange={(e) => setImage(e.target.value.split(", "))}
      />
      <br />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default EditForm;
