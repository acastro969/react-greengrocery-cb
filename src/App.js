import {Component} from 'react';
import Banana from './assets/images/Banana.png';
import Apple from './assets/images/Apple.png';
import Lettuce from './assets/images/Lettuce.png';
import Spinach from './assets/images/Spinach.webp';
import Cherries from './assets/images/Cherries.png';
import Tomato from './assets/images/Tomato.png';
import SweetPotato from './assets/images/SweetPotato.png';
import Pear from './assets/images/Pears.png';
import Peach from './assets/images/Peach.png';
import Orange from './assets/images/Orange.png';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import Layout from './components/Layout/Layout';
import './App.scss';

class App extends Component {
  state = {
    products: [
      {id: 1, img: Banana, title: 'Bananas', price: 5.9},
      {id: 2, img: Apple, title: 'Apples', price: 1.05},
      {id: 3, img: Lettuce, title: 'Lettuces', price: 8.79},
      {id: 4, img: Spinach, title: 'Spinach', price: 1.20},
      {id: 5, img: Cherries, title: 'Cherries', price: 1.15},
      {id: 6, img: Tomato, title: 'Tomatoes', price: 2.40},
      {id: 7, img: SweetPotato, title: 'Sweet Potatoes', price: 5.4},
      {id: 8, img: Pear, title: 'Pears', price: 6.2},
      {id: 9, img: Peach, title: 'Peaches', price: 2.30},
      {id: 10, img: Orange, title: 'Oranges', price: 1.45}
    ],
    cart: []
  }

  handleClickAddProduct = (product) => {
    const {cart} = this.state;

    if (cart.filter(ap => ap.id === product.id)[0]) {
      this.setState({
        cart: cart.map(ap => ap.id === product.id ? {...ap, added: ap.added+1} : ap)
      })
    } else {
      this.setState({
        cart: cart.concat({...product, added: 1})
      });
    }
  }

  handleClickResetCart = () => {
    this.setState({cart: []});
  }

  render() {
    return (
      <div className='app'>
        <Navbar
          products={this.state.cart}
          resetCart={this.handleClickResetCart}
        />
        <Layout>
          <h1 className='app__title'>
            React Greengrocery
          </h1>
          <Catalog
            products={this.state.products}
            addToCart={this.handleClickAddProduct}
          />
        </Layout>
      </div>
    )
  }
}

export default App;