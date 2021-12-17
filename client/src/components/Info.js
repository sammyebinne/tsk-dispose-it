import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Info = ({
  wasteType,
  showMoreInfo,
  toggleShowMoreInfo,
  toggleShowKeywords,
  showKeywords,
  onCategoryChange,
}) => {
  const { isLoggedIn } = useContext(AuthContext);

  const getIcon = (binNumber) => {
    let bin;
    if (binNumber === 1) {
      bin = wasteType.instruction.body1.bin;
    } else {
      bin = wasteType.instruction.body2.bin;
    }
    switch (bin) {
      case "Compost":
        return "https://media.istockphoto.com/vectors/compost-bin-icon-on-transparent-background-vector-id1284317590?k=20&m=1284317590&s=170667a&w=0&h=ensQTK-xSPKEtJtFb7ZPgg37kFEQlAIbJ_VqS8Sl4ts=";
      case "Recycling":
        return "https://image.shutterstock.com/image-vector/blue-recycle-bin-icon-vector-260nw-220733944.jpg";
      case "Garbage":
        return "https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg";
      case "Recycling drop-off":
        return "https://static.wixstatic.com/media/71d77b_9d68049079fd4e47aa017081162aa687~mv2.jpg/v1/fill/w_296,h_212,al_c,q_80,usm_0.66_1.00_0.01/electronic-waste-recycling-001.webp";
      case "Donate":
        return "https://rmhccnaz.org/wp-content/uploads/Donate-Icon-01.png";
      case "Landfill":
        return "https://static.thenounproject.com/png/576941-200.png";
      case "medical waste":
        return "https://marvel-b1-cdn.bc0a.com/f00000000229279/twu.edu/media/images/risk-management/biohazardwarninglabels.jpg";
      case "hazardous waste":
        return "https://image.shutterstock.com/image-vector/biohazard-sign-logo-circular-260nw-1459235717.jpg";
      case "pharmacy":
        return "https://cdn-icons-png.flaticon.com/512/169/169837.png";
      case "metal recycler":
        return "https://c8.alamy.com/comp/C131D4/two-arrow-metal-recycling-symbol-over-white-background-C131D4.jpg";
      case "sink":
        return "https://cdn-icons-png.flaticon.com/512/2373/2373426.png";
      case "radioactive waste":
        return "https://e7.pngegg.com/pngimages/994/144/png-clipart-nuclear-power-radioactive-decay-radioactive-waste-hazard-symbol-symbol-miscellaneous-sticker.png";
      case "return":
        return "https://cdn-icons-png.flaticon.com/512/61/61449.png";
      case "reuse":
        return "https://www.recycling.com/wp-content/uploads/2017/07/reuse-reusing-step-symbol-logo-blue.png";
      case "police":
        return "https://cdn.iconscout.com/icon/free/png-256/police-1659481-1410003.png";
      default:
        return "https://static.thenounproject.com/png/33699-200.png";
    }
  };
  let category = wasteType.category;
  let heading1 = wasteType.instruction.heading1;
  let condition1 = wasteType.instruction.body1.condition;
  let heading2;
  let body2;
  let condition2;
  let image = wasteType.image;
  if (wasteType.instruction.heading2) {
    heading2 = wasteType.instruction.heading2;
    body2 = wasteType.instruction.body2;
    condition2 = wasteType.instruction.body2.condition;
  }
  let moreInfo = wasteType.moreInfo;
  console.log("more info", moreInfo);
  let moreInfoList;
  if (moreInfo) {
    moreInfoList = moreInfo.map((item) => {
      return (
        <li key={item.id} style={{ fontSize: 10 }}>
          {item}
        </li>
      );
    });
  }

  return (
    <div>
      <div className="header">
        <h2>{category}</h2>
        <img src={image} alt="" />
      </div>
      {/* if heading1 is different from category, show it. Otherwise, hide it. */}
      {heading1.slice(1) !== category && heading1 && <h3>{heading1}</h3>}
      <p>{condition1}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <img src={getIcon(1)} alt="" />
      </div>
      <h3>{heading2 && heading2}</h3>
      {<p>{body2 && condition2}</p>}
      {body2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <img src={getIcon(2)} alt="" />
        </div>
      )}
      {moreInfo[0] && (
        <h4 onClick={toggleShowMoreInfo} style={{ cursor: "pointer" }}>
          {showMoreInfo ? "More info" : "(click to show more info)"}
        </h4>
      )}
      {moreInfo[0] && showMoreInfo && moreInfoList}
      <br />
      {category && (
        <h4 onClick={toggleShowKeywords} style={{ cursor: "pointer" }}>
          {showKeywords ? "Keywords" : "(click to show keywords)"}
        </h4>
      )}
      {category && showKeywords && (
        <p style={{ fontSize: 10 }}>{wasteType.keywords.join("; ")}</p>
      )}
      <br />
      <button onClick={onCategoryChange} className="btn btn-block">
        Not what you were looking for?
      </button>
      <div>
        {!isLoggedIn && (
          <small>
            Not satisfied with the results?{" "}
            <Link to={"/"}>Signup or Login</Link> to contribute to this guide.
          </small>
        )}
      </div>
    </div>
  );
};

export default Info;
