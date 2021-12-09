import { useState } from "react";

const AddForm = ({ setIsAdd, search }) => {
  const [formData, setFormData] = useState({
    category: "",
    keywords: [],
    heading1: "",
    condition1: "",
    bin1: "",
    heading2: "",
    condition2: "",
    bin2: "",
    moreInfo: [],
    image: [],
    votes: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "keywords" || name === "image" || name === "moreInfo") {
      value = value.split("; ");
    }
    setFormData({ ...formData, [name]: value });
  };

  const addItem = async (e) => {
    e.preventDefault();
    // ensure certain conditions are met:
    if (!formData.category) {
      return alert("Category required");
    }
    setIsAdd(false);
    let addedEntry = await fetch("/addItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: formData.category,
        keywords: formData.keywords,
        instruction: {
          heading1: formData.heading1,
          body1: {
            condition: formData.condition1,
            bin: formData.bin1,
          },
          heading2: formData.heading2,
          body2: {
            condition: formData.condition2,
            bin: formData.bin2,
          },
        },
        moreInfo: formData.moreInfo,
        image: formData.image,
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
        name="category"
        value={formData.category}
        onChange={handleChange}
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
        name="keywords"
        value={formData.keywords.join("; ")}
        onChange={handleChange}
        required
        placeholder="REQUIRED"
      />
      <br />
      <label htmlFor="heading1">Heading 1:</label>
      <input
        id="heading1"
        name="heading1"
        type="text"
        value={formData.heading1}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="condition1">Condition 1:</label>
      <input
        id="condition1"
        name="condition1"
        type="text"
        value={formData.condition1}
        onChange={handleChange}
        required
        placeholder="REQUIRED"
      />
      <br />
      <label htmlFor="bin1">Bin 1:</label>
      <input
        id="bin1"
        name="bin1"
        type="text"
        value={formData.bin1}
        onChange={handleChange}
        required
        placeholder="REQUIRED"
      />
      <br />
      <label htmlFor="heading2">Heading 2:</label>
      <input
        id="heading2"
        name="heading2"
        type="text"
        value={formData.heading2}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="condition2">Condition 2:</label>
      <input
        id="condition2"
        name="condition2"
        type="text"
        value={formData.condition2}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="bin2">Bin 2:</label>
      <input
        id="bin2"
        name="bin2"
        type="text"
        value={formData.bin2}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="moreInfo">More Info (separate by ; + space):</label>
      <input
        id="moreInfo"
        name="moreInfo"
        type="text"
        value={formData.moreInfo.join("; ")}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="image">Image(s) (separate by comma + space):</label>
      <input
        id="image"
        name="image"
        type="text"
        value={formData.image.join("; ")}
        onChange={handleChange}
      />
      <br />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default AddForm;
