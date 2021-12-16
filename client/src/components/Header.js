const Header = ({
  currentCategory,
  toggleEdit,
  isEdit,
  toggleAdd,
  isAdd,
  search,
}) => {
  const deleteEntry = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this item from the database?"
      )
    ) {
      let deletedEntry = await fetch("/deleteItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentCategory._id,
        }),
      });
      deletedEntry = await deletedEntry.json();
      console.log("deleted entry:", deletedEntry);
      // this is a workaround for updating the page immediately to show changes.
      search(currentCategory.category);
    } else {
      console.log("item not deleted");
    }
  };
  return (
    <div className="header">
      <h1>Dispose It!</h1>
      {/* edit button only shows up when a waste type is found and when isAdd isn't toggled */}
      {currentCategory && !isAdd && (
        <button
          onClick={toggleEdit}
          type="button"
          className="btn"
          style={isEdit ? { background: "red" } : { background: "green" }}
        >
          {isEdit ? "Cancel" : "Edit"}
        </button>
      )}
      {/* Add button disappears when Edit button is toggled */}
      {!isEdit && (
        <button
          onClick={toggleAdd}
          type="button"
          className="btn"
          style={isAdd ? { background: "red" } : { background: "blue" }}
        >
          {isAdd ? "Cancel" : "Add"}
        </button>
      )}
      {currentCategory && !isEdit && !isAdd && (
        <button
          onClick={deleteEntry}
          type="button"
          className="btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Header;
