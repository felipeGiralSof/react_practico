import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  const handleToggleOrders = () => {
    setToggleOrder(!toggleOrder);
  }

  return(
    <div className="nav-div">
      <nav>
        <img src={menu} alt="menu" className="menu"/>
        
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo"/>
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              felipe-giraldo@hotmail.es
            </li>
            <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
              <img src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrder && <MyOrder/>}
      </nav>
    </div>
  );
}

export default Header;