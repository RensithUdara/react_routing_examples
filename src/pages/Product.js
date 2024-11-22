import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();

  return (
    <div className="page">
      <h1>Product Details</h1>
      <p>You are viewing details for product ID: {productId}</p>
    </div>
  );
}

export default Product;
