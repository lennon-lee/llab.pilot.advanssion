import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

import './Main.css';
import Studio3wireless from '../../assets/studio3wireless.png';
import Pill from '../../assets/pill.png';
import Product  from '../../components/ui/Product';

const Main = ({ isPC }) => {
  let firstStyle = "main-first";
  let firstWrapStyle = "main-first-wrap";
  let firstProductStyle = "main-first-product";
  let firstContentsStyle = "main-first-contents";
  let firstContentsTypeStyle = "main-first-contents-type";
  let firstContentsTitleStyle = "main-first-contents-title";  
  let firstContentsBuyStyle = "main-first-contents-buy";
  let firstContentsBuyPriceStyle = "main-first-contents-buy-price";  
  let firstContentsBuyButtonStyle = "main-first-contents-buy-button";
  let firstContentsDescStyle = "main-first-contents-desc";
  let firstProductImageSize = "850px";

  let secondStyle = "main-second";
  let secondProductStyle = "main-second-product";
  let secondContentsStyle = "main-second-contents";
  let secondContentsTypeStyle = "main-second-contents-type";
  let secondContentsTitleStyle = "main-second-contents-title";
  let secondContentsColorTitleStyle = "main-second-contents-color-title";
  let secondContentsColorSubtitleStyle = "main-second-contents-color-subtitle";
  let secondContentsColorBalloptionStyle = "main-second-contents-color-balloption";
  let secondContentsBuyStyle = "main-second-contents-buy";
  let secondContentsBuyPriceStyle = "main-second-contents-buy-price";
  let secondContentsBuyButtonStyle = "main-second-contents-buy-button";
  let secondContentsDescStyle = "main-second-contents-desc";
  let secondProductImageSize = "755px";

  let mainListStyle = "main-list";

  if (!isPC) {
    firstStyle = "mobile-main-first";
    firstWrapStyle = "mobile-main-first-wrap";
    firstProductStyle = "";
    firstContentsStyle = "mobile-main-first-contents";
    firstContentsTypeStyle = "mobile-main-first-contents-type";
    firstContentsTitleStyle = "mobile-main-first-contents-title";
    firstContentsBuyStyle = "mobile-main-first-contents-buy";
    firstContentsBuyPriceStyle = "mobile-main-first-contents-buy-price";
    firstContentsBuyButtonStyle = "mobile-main-first-contents-buy-button";
    firstContentsDescStyle = "mobile-main-first-contents-desc";
    firstProductImageSize = "424px";

    secondStyle = "mobile-main-second";
    secondProductStyle = "";
    secondContentsStyle = "mobile-main-second-contents";
    secondContentsTypeStyle = "mobile-main-second-contents-type";
    secondContentsTitleStyle = "mobile-main-second-contents-title";
    secondContentsColorTitleStyle = "mobile-main-second-contents-color-title";
    secondContentsColorSubtitleStyle = "mobile-main-second-contents-color-subtitle";
    secondContentsColorBalloptionStyle = "mobile-main-second-contents-color-balloption";
    secondContentsBuyStyle = "mobile-main-second-contents-buy";
    secondContentsBuyPriceStyle = "mobile-main-second-contents-buy-price";
    secondContentsBuyButtonStyle = "mobile-main-second-contents-buy-button";
    secondContentsDescStyle = "mobile-main-second-contents-desc";
    secondProductImageSize = "348px";

    mainListStyle = "mobile-main-list";
  }

  const mainSecondProduct = (
    <div className={ secondProductStyle }>
      <img
          style={{ width: secondProductImageSize}}
          src={ Pill }
          alt="pill"
        />
    </div>
  );

  /** Products */
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('mock_data/products.json');
      setProducts(response.data);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <section className={ firstStyle }>
        <div className={ firstWrapStyle }>
          <div className={ firstProductStyle }>
            <img
              style={{ maxWidth: firstProductImageSize }}
              src={ Studio3wireless }
              alt="studio3wireless"            
            />
          </div>
          <div className={ firstContentsStyle }>
            <div className={ firstContentsTypeStyle }>Beats Studio3 Wireless</div>
            <div className={ firstContentsTitleStyle }>Experience your music like never before.</div>
            <div className={ firstContentsBuyStyle }>
              <div className={ firstContentsBuyPriceStyle }>$299.95</div>
              <div className={ firstContentsBuyButtonStyle }>BUY NOW</div>
            </div>
            <div className={ firstContentsDescStyle }>$60 Apple Music gift card with purchase of select Beats products.*</div>
          </div>
        </div>
      </section>
      <section className={ secondStyle }>
        { !isPC && mainSecondProduct}
        <div className={ secondContentsStyle }>
          <div className={ secondContentsTypeStyle }>Portable Wireless Speaker</div>
          <div className={ secondContentsTitleStyle }>Beats Pill</div>
          <div className={ secondContentsColorTitleStyle }>Available Colors</div>
          <div className={ secondContentsColorSubtitleStyle }>Find your Color</div>
          <div className={ secondContentsColorBalloptionStyle }>
            <div className="whiteball"></div>
            <div className="redball"></div>
            <div className="blackball"></div>
          </div>
          <div className={ secondContentsBuyStyle }>
            <div className={ secondContentsBuyPriceStyle }>$299.95</div>
            <div className={ secondContentsBuyButtonStyle }>BUY NOW</div>
          </div>
          <div className={ secondContentsDescStyle }>$60 Apple Music gift card with purchase of select Beats products.*</div>
        </div>
        { isPC && mainSecondProduct}
      </section>
      <section className={ mainListStyle }>
        { products.map(product => (          
          <Product
            key={ product.id }
            src={ product.path }
            width={ product.width }
            height={ product.height }
            type={ product.type }
            desc={ product.desc }
            price={ product.price }
          />
        )) }
      </section>
      <section className="sign-up">
        <div className="sign-up-form">
          <div className="sign-up-form-title">Hear it first</div>
          <div className="sign-up-form-desc">Get updates on product drops, collaborations and all things Beats.</div>
          <input
            placeholder={`Enter your email`}
            className="sign-up-form-email"
            type="email"
            name="email"
          />
          <div className="sign-up-form-button">Sign up</div>
        </div>
      </section>
    </div>
  );
};

export default Main;