import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ src, width, height, price }) => (
  <div className="product">
    <div className="product-cover">
      <img
        style={{ width: `${width}px`, height: `${height}px`}}
        src={ src }
        alt="product"
      />
    </div>
    <div className="product-wrap">
      <div className="product-type">Beatsˣ</div>
      <div className="product-desc">Up to 8 hours of battery life With Fast Fuel, a 5-minute charge = 2 hours of playback</div>
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
  price: PropTypes.number
};

Product.defaultProps = {
  width: 263,
  height: 356
}

export default Product;