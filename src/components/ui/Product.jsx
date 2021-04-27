import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ isPC, src, width, height, type, desc, price }) => (
  <div className={ isPC ? "product": "mobile-product" }>
    <div className={ isPC ? "product-cover" : "mobile-product-cover" }>
      <img
        style={{ width: `${ width }px`, height: `${ height }px`}}
        src={ src }
        alt="product"
      />
    </div>
    <div className="product-wrap">
      <div className="product-type">${ type }</div>
      <div className={ isPC ? "product-desc" : "mobile-product-desc"}>${ desc }</div>
      <div className="product-buy">
        <div className="product-buy-price">${ price }</div>
        <div className={ isPC ? "product-buy-button" : "mobile-product-buy-button" }>BUY NOW</div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  isPC: PropTypes.bool,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number
};

Product.defaultProps = {
  isPC: true,
  width: 263,
  height: 356
}

export default Product;