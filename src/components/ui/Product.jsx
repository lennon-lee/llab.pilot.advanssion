import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ src, width, height, type, desc, price }) => (
  <div className="product">
    <div className="product-cover">
      <img
        style={{ width: `${ width }px`, height: `${ height }px`}}
        src={ src }
        alt="product"
      />
    </div>
    <div className="product-wrap">
      <div className="product-type">${ type }</div>
      <div className="product-desc">${ desc }</div>
      <div className="product-buy">
        <div className="product-buy-price">${ price }</div>
        <div className="product-buy-button">BUY NOW</div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number
};

Product.defaultProps = {
  width: 263,
  height: 356
}

export default Product;