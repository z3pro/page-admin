/* eslint-disable jsx-a11y/alt-text */
function ItemCategory({ img }) {
  console.log(img);
  return (
    <div
      style={{
        cursor: "pointer",
        padding: "5px 15px",
        margin: "0 4px",
        lineHeight: "1",
        fontWeight: "700",
        display: "inline-block",
        fontSize: "20px",
        border: "1px solid #666",
        borderRadius: "99999px",
      }}
    >
      <img src={img} style={{ height: "22px", width: "auto" }} />
    </div>
  );
}

export default ItemCategory;
