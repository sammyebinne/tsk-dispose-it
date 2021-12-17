import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = ({
  currentCategory,
  toggleEdit,
  isEdit,
  toggleAdd,
  isAdd,
  search,
}) => {
  const navigate = useNavigate();
  //AuthContext to check if user is logged in
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn", isLoggedIn);

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

  const logout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await axios.get("/auth/logout");
      setLoggedIn();
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="header">
      <h1>Dispose It!</h1>
      <br />

      {/* edit button only shows up when a waste type is found and when isAdd isn't toggled */}
      {isLoggedIn && currentCategory && !isAdd && (
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
      {isLoggedIn && !isEdit && (
        <button
          onClick={toggleAdd}
          type="button"
          className="btn"
          style={isAdd ? { background: "red" } : { background: "blue" }}
        >
          {isAdd ? "Cancel" : "Add"}
        </button>
      )}
      {isLoggedIn && currentCategory && !isEdit && !isAdd && (
        <button
          onClick={deleteEntry}
          type="button"
          className="btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
      <div>
        {isLoggedIn && !currentCategory && (
          <button type="button" className="btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
