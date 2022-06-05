import {Component} from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <button
        className={`button ${this.props.secondary && 'button--secondary'}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;