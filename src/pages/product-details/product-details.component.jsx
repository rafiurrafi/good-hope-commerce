import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductFromId } from "../../utils/utils";
import "./product-details.style.scss";
import { ProductContext } from "../../context/product.context";
import img1 from "./img/boy-1.jpg";
import img2 from "./img/girl-1.jpeg";
import img3 from "./img/boy-2.jpg";
import img4 from "./img/girl-2.jpg";
import {
  H1,
  H4,
  SubHeading,
} from "../../componentns/typography/typography.component";
import Title from "../../componentns/title/title.component";
import { useState } from "react";
import { useReducer } from "react";
import StarRatings from "react-star-ratings";
const ProductDetails = () => {
  const { id } = useParams();
  let { products } = useContext(ProductContext);
  const [product, setProduct] = useState(getProductFromId(id, products));
  useEffect(() => {
    if (!product)
      fetch("https://dummyjson.com/products/" + id)
        .then((response) => response.json())
        .then((product) => setProduct(product))
        .catch((err) => console.error(err));
  }, []);

  const [activeTab, setActiveTab] = useState("desc");

  return (
    <>
      {product && (
        <div className="product-details">
          <Title
            title={product.title}
            route="Shop - Details page"
            image={product?.images[1]}
          />
          <section className="product-des">
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
                  <del>
                    ${product.price * Math.floor(Math.random() * 3 + 1)}
                  </del>
                </p>

                <div className="product-tab">
                  <div className="product-tab__btns">
                    <button
                      onClick={() => setActiveTab("desc")}
                      className={`${activeTab === "desc" ? "active" : ""}`}
                    >
                      Description
                    </button>
                    <button
                      onClick={() => setActiveTab("det")}
                      className={`${activeTab === "det" ? "active" : ""}`}
                    >
                      Details
                    </button>
                    <button
                      onClick={() => setActiveTab("rev")}
                      className={`${activeTab === "rev" ? "active" : ""}`}
                    >
                      Reviews
                    </button>
                  </div>
                  <div className="product-tab__content">
                    {activeTab === "desc" && (
                      <ProductDescription content={product.description} />
                    )}
                    {activeTab === "det" && (
                      <ProductDetailsText product={product} />
                    )}
                    {activeTab === "rev" && <ProductReview />}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
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
function ProductReview() {
  const profilePics = [img1, img2, img3, img4];
  const initialState = { comments: [], isLoading: true };
  function commentReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "toggle_loading":
        return { ...state, isLoading: payload };
      case "set_comments":
        return { ...state, comments: payload, isLoading: false };
      default:
        throw new Error(`Unhandled action type ${type}`);
    }
  }
  const [{ isLoading, comments }, dispatch] = useReducer(
    commentReducer,
    initialState
  );
  useEffect(() => {
    dispatch({ type: "toggle_loading", payload: true });
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then(({ comments }) =>
        dispatch({ type: "set_comments", payload: comments })
      )
      .catch((err) => console.log(err));
  }, []);
  function getComments(comments) {
    const cmnts = [];
    for (var i = 0; i < 4; i++) {
      const randomId = Math.floor(Math.random() * comments.length) + 1;
      cmnts.push(comments[randomId]);
    }
    return cmnts;
  }
  return (
    <div className="product-review">
      <h1>Review</h1>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="product-review__container">
          {getComments(comments).map(
            (comment, id) =>
              comment && (
                <div key={comment.id} className="product-review__single">
                  <img src={profilePics[id]} />
                  <h3>{comment.user.username}</h3>
                  <StarRatings
                    rating={Math.floor(Math.random() * 4) + 1}
                    starDimension="10px"
                    starSpacing="2px"
                    starRatedColor="rgb(212,175,55)"
                  />
                  <p>{comment.body}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
