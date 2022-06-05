import {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import ProductDetail from './ProductDetail/ProductDetail';
import './Cart.scss';

class Cart extends Component {
  renderDetails = (products) => {
    return products.map((p) =>
      <ProductDetail product={p} key={p.id} />
    );
  }

  calculateTotalProducts = (products) => {
    let quantity = products.reduce((q, p) => q + p.added, 0);
    return quantity > 9 ? '9+' : quantity;
  }

  calculateTotalPrice = (products) => {
    return products.reduce((q, p) => q + p.price * p.added, 0)
      .toFixed(2);
  }

  render() {
    const {products, showCartPanel} = this.props;

    return (
      <div className='cart'>
        <FontAwesomeIcon
          icon={faCartShopping}
        />
        My Cart
        <span className='bubble'>
          {this.calculateTotalProducts(products)}
        </span>
        {showCartPanel === true && (
          <div className='cart__panel'>
            {products.length > 0 ? (
              <>
                <div className='panel__product-list'>
                  {this.renderDetails(products)}
                </div>
                <div className='panel__summary'>
                  Total: <b>${this.calculateTotalPrice(products)}</b>
                </div>
                <div className='panel__actions'>
                  <Button
                    onClick={() => this.props.resetCart()}
                    secondary={true}
                  >
                    Clear cart
                  </Button>
                </div>
              </>
            ) : (
              <>
                Your cart is empty.
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Cart;