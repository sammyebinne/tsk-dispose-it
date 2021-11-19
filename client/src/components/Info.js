const Info = ({ wasteType }) => {
  const getImage = () => {
    switch (wasteType.bin) {
      case "green":
        return "https://p.kindpng.com/picc/s/227-2279211_scraps-to-savings-compost-bin-icon-png-transparent.png";
      case "blue":
        return "https://image.shutterstock.com/image-vector/blue-recycle-bin-icon-vector-260nw-220733944.jpg";
      case "black":
        return "https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg";
      default:
        return "https://static.thenounproject.com/png/33699-200.png";
    }
  };
  return (
    <div>
      <h3>{wasteType.category}</h3>
      <p>Throw it in the {wasteType.bin} bin</p>
      <img src={getImage()} />
    </div>
  );
};

export default Info;
