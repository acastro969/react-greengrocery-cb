import {Component} from 'react';
import Button from '../Button/Button';
import './Product.scss';

class Product extends Component {
  render() {
    const {title, img, price, addedQuantity} = this.props.product;

    return (
      <div className='product'>
        <div className='product__image'>
          <img src={img} alt='' width='100' />
        </div>
        <div className='product__details'>
          <h2 className='product__title'>
            {title}
          </h2>
          <p className='product__price'>
            ${price} / kg&nbsp;
            {addedQuantity > 0 && `(${addedQuantity})`}
          </p>
          <div className='product__buttons'>
            <Button
              onClick={() => this.props.addToCart(this.props.product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;