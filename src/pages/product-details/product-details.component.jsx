import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductFromId } from "../../utils/utils";
import "./product-details.style.scss";
import { ProductContext } from "../../context/product.context";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = getProductFromId(id, products);
  console.log(product);
  return (
    <div>
      <h1>Product details</h1>
    </div>
  );
};

export default ProductDetails;
