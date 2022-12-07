import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductFromId } from "../../utils/utils";
import "./product-details.style.scss";
import { ProductContext } from "../../context/product.context";
import { H4 } from "../../componentns/typography/typography.component";
const ProductDetails = () => {
  const { id } = useParams();
  let { products, isLoading } = useContext(ProductContext);
  let product = getProductFromId(id, products);

  console.log(products, product);

  //problem when direct goto /products/:id because of not loading products

  return (
    <div className="product-details">
      <section className="product-des">
        {isLoading ? (
          "Loading"
        ) : (
          <div className="container">
            <div className="product-des__img">
              <img src={product?.images[0]} alt="" />
            </div>
            <div className="product-des__content">
              <H4>{product?.title}</H4>
              <div>{product?.rating} (50 reviews)</div>
              <p className="product-des__price">{product?.price}</p>
              <p className="product-des__text">
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr
                erat diam stet sit clita ea. Sanc invidunt ipsum et, labore
                clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy.
                Accus labore stet, est lorem sit diam sea et justo, amet at
                lorem et eirmod ipsum diam et rebum kasd rebum.
              </p>
              <div className="product-des__size">
                <p>Sizes</p>
                <div>
                  <div className="radio">
                    <label>
                      <input
                        name="size"
                        type="radio"
                        value="option1"
                        checked={true}
                      />
                      Option 1
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input name="size" type="radio" value="option2" />
                      Option 2
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input name="size" type="radio" value="option3" />
                      Option 3
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetails;
