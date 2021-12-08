const Header = ({ currentCategory, toggleEdit, isEdit }) => {
  return (
    <div className="header">
      <h1>Dispose It!</h1>
      {/* edit button only shows up when a waste type is found */}
      {currentCategory && (
        <button
          onClick={toggleEdit}
          type="button"
          className="btn"
          style={isEdit ? { background: "red" } : { background: "green" }}
        >
          {isEdit ? "Cancel" : "Edit"}
        </button>
      )}
    </div>
  );
};

export default Header;
