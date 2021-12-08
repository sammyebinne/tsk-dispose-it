import { useState } from "react";

const AddForm = ({ setIsAdd, search }) => {
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [heading1, setHeading1] = useState("");
  const [condition1, setCondition1] = useState("");
  const [bin1, setBin1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [condition2, setCondition2] = useState("");
  const [bin2, setBin2] = useState("");
  const [moreInfo, setMoreInfo] = useState([]);
  const [image, setImage] = useState([]);

  const addItem = async (e) => {
    e.preventDefault();
    // ensure certain conditions are met:
    if (!category) {
      return alert("Category required");
    }
    setIsAdd(false);
    let addedEntry = await fetch("/addItem", {
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
        votes: 0,
      }),
    });
    addedEntry = await addedEntry.json();
    console.log("added entry:", addedEntry);
    // this is a workaround for updating the page immediately to show changes.
    search(addedEntry.category);
  };
  return (
    <form onSubmit={addItem} className="form-control">
      <label htmlFor="category">Category:</label>
      <input
        id="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        placeholder="REQUIRED"
      />
      <br />
      <label htmlFor="keywords">
        Keywords (separate by semicolon + space):
      </label>
      <input
        id="keywords"
        type="text"
        value={keywords.join("; ")}
        onChange={(e) => setKeywords(e.target.value.split("; "))}
        required
        placeholder="REQUIRED"
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
        required
        placeholder="REQUIRED"
      />
      <br />
      <label htmlFor="bin1">Bin 1:</label>
      <input
        id="bin1"
        type="text"
        value={bin1}
        onChange={(e) => setBin1(e.target.value)}
        required
        placeholder="REQUIRED"
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

export default AddForm;
