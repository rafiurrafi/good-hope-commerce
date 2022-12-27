import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductFromId } from "../../utils/utils";
import "./product-details.style.scss";
import { ProductContext } from "../../context/product.context";
import {
  H1,
  H4,
  SubHeading,
} from "../../componentns/typography/typography.component";
import Title from "../../componentns/title/title.component";
import { useState } from "react";
const ProductDetails = () => {
  const { id } = useParams();
  let { products, isLoading } = useContext(ProductContext);
  let product = getProductFromId(id, products);
  const [activeTab, setActiveTab] = useState("desc");

  return (
    <div className="product-details">
      <Title
        title={product.title}
        route="Shop - Details page"
        image={product?.images[1]}
      />
      <section className="product-des">
        {isLoading ? (
          "Loading"
        ) : (
          <div className="container">
            <div className="product-des__img">
              <img src={product?.images[0]} alt="" />
            </div>
            <div className="product-des__content">
              <H1 color="#0d779e">{product?.title}</H1>
              <SubHeading color="#444">
                {product.brand} -
                <span className="product-des__rating">
                  <span> {product?.rating}</span> (50 reviews)
                </span>
              </SubHeading>
              <p className="product-des__price">
                <span>${product?.price} </span>
                <del>${product.price * Math.floor(Math.random() * 3 + 1)}</del>
              </p>

              <div className="product-tab">
                <div className="product-tab__btns">
                  <button>Description</button>
                  <button>Details</button>
                  <button>Reviews</button>
                </div>
                <div className="product-tab__content">
                  <ProductDescription content={product.description} />
                  <ProductDetailsText product={product} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

function ProductDescription({ content }) {
  return (
    <div className="product-des__text">
      <p style={{ marginBottom: "1.5rem" }}>{content}</p>
      <p>
        labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy.
        Accus labore stet, est lorem sit diam sea et justo, amet at lorem et
        eirmod ipsum diam et rebum kasd rebum.
      </p>
    </div>
  );
}
function ProductDetailsText({ product }) {
  return (
    <div className="product-des__details">
      <div className="product-des__details-left">
        <div>
          <p>
            <b>Brand</b> :
          </p>
          <p>{product.brand}</p>
        </div>
        <div>
          <p>
            <b>Price</b> :
          </p>
          <p>{product.price}</p>
        </div>
        <div>
          <p>
            <b>Ratings</b> :
          </p>
          <p>{product.rating}</p>
        </div>

        <div>
          <p>
            <b>Availability</b> :
          </p>
          <p>Yes</p>
        </div>
        <div>
          <p>
            <b>Stock</b> :
          </p>
          <p>{product.stock}</p>
        </div>
      </div>
      <div className="product-des__details-right">
        <div>
          <p>
            <b>Category</b> :
          </p>
          <p>{product.category}</p>
        </div>
        <div>
          <p>
            <b>Discount</b> :
          </p>
          <p>{product.discountPercentage}</p>
        </div>

        <div>
          <p>
            <b>Color</b> :
          </p>
          <p>Golden Rod</p>
        </div>
        <div>
          <p>
            <b>Size</b> :
          </p>
          <p>XL</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
