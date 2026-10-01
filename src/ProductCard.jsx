function ProductCard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "15px",
        width: "300px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.title}</h2>
      <p>Price: Rs. {props.price}</p>
      <p>Category: {props.category}</p>
    </div>
  );
}

export default ProductCard;