import {Component} from 'react';
import Product from '../Product/Product';
import './Catalog.scss';

class Catalog extends Component {
  renderProductList = (products) => {
    return products.map((p) =>
      <Product
        key={p.id}
        product={p}
        addToCart={this.props.addToCart}
      />
    )
  }

  render() {
    const {products} = this.props;

    return (
      <div className='catalog'>
        {this.renderProductList(products)}
      </div>
    )
  }
}

export default Catalog;