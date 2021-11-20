import React, {useContext, useState} from 'react';
import AppContext from '@context/AppContext';
import ProductDetail from '@containers/ProductDetail';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg/';

const ProductItem = ({product}) => {

  const {addToCart} = useContext(AppContext);
  
  const handleClick = item => {
    addToCart(item);
    console.log(item);
  }

  const [productInfo, setProductInfo] = useState(false);
  const handleProductInfoClick = () => {
    setProductInfo(!productInfo);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} onClick={() => handleProductInfoClick()} className="ProductItemImage"/>
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="Shopping Cart"/>
        </figure>
      </div>
      {productInfo && <ProductDetail/>}
    </div>
  );
}

export default ProductItem;