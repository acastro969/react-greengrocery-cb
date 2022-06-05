import {Component} from "react";
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    const {product} = this.props;
    return (
      <div
        className='product-detail'
        key={product.id}
      >
        <img src={product.img} alt='' width='40' />
        <p>{product.title}</p>
        <p><b>{product.added}</b> kg/s</p>
      </div>
    )
  }
}

export default ProductDetail;