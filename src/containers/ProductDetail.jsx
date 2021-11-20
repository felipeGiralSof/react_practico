import React from 'react';
import ProductInfo from '@components/ProductInfo';
import useGetProducts from '@hooks/useGetProducts'
import close from '@icons/icon_close.png';
import '@styles/ProductDetail.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductDetail = () => {

	const products = useGetProducts(API);

  return (
    <aside className="ProductDetail">
			<div className="ProductDetailClose">
				<img src={close} alt="close" />
			</div>{products.map(product => (
				<ProductInfo product={product} key={`productInfo-${product.id}`}/>
			))}
		</aside>
  );
}

export default ProductDetail;