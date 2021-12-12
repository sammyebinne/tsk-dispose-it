const Info = ({ wasteType, showMoreInfo, toggleShowMoreInfo }) => {
  const getIcon = (binNumber) => {
    let bin;
    if (binNumber === 1) {
      bin = wasteType.instruction.body1.bin;
    } else {
      bin = wasteType.instruction.body2.bin;
    }
    switch (bin) {
      case "Compost":
        return "https://p.kindpng.com/picc/s/227-2279211_scraps-to-savings-compost-bin-icon-png-transparent.png";
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
      <h2>{category}</h2>
      {/* if heading1 is different from category, show it. Otherwise, hide it. */}
      {heading1.slice(1) !== category && heading1 && <h3>{heading1}</h3>}
      <p>{condition1}</p>
      <img src={getIcon(1)} />
      <img src={image} />
      <h3>{heading2 && heading2}</h3>
      {<p>{body2 && condition2}</p>}
      {body2 && <img src={getIcon(2)} />}
      {moreInfo[0] && (
        <h4 onClick={toggleShowMoreInfo} style={{ cursor: "pointer" }}>
          More info: (click to show/hide)
        </h4>
      )}
      {moreInfo[0] && showMoreInfo && moreInfoList}
      {category && <h4>Keywords:</h4>}
      {/* Uncomment this when adding to database. It allows you to see keys for each entry. */}
      {category && <p>{wasteType.keywords.join("; ")}</p>}
    </div>
  );
};

export default Info;
