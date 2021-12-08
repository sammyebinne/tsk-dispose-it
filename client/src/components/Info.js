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
      return <li key={item.id}>{item}</li>;
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
    </div>
  );
};

export default Info;
