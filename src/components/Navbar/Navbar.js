import {Component} from 'react';
import Cart from './Cart/Cart';
import './Navbar.scss';

class Navbar extends Component {
  state = {
    showCartPanel: false
  }

  toggleCartPanel = () =>
    this.setState({showCartPanel: !this.state.showCartPanel})

  render() {
    const {resetCart, products} = this.props;
    const {showCartPanel} = this.state;

    return (
      <header>
        <nav className='navbar'>
          <ul className='navbar__list'>
            <li className='navbar__link'>
              <a
                className='link'
                href='/'
              >
                Home
              </a>
            </li>
            <li className='navbar__link'>
              <a
                className='link'
                href='#'
                onClick={() => this.toggleCartPanel()}
              >
                <Cart
                  resetCart={resetCart}
                  products={products}
                  showCartPanel={showCartPanel}
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;