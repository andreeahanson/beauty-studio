import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCollection.css';
import PropTypes from 'prop-types';

const ProductCollection = ({products, toggleFavorite}) => {
  const allProducts = products.map(product => {
    if(product.price != 0){
    return (
    <ProductCard 
    id={product.id}
    key={product.id}
    brand={product.brand}
    name={product.name} 
    description={product.description}
    price={product.price} 
    image={product.image_link} 
    colors={product.product_colors}
    type={product.product_type}
    tagList={product.tag_list}
    toggleFavorite={toggleFavorite}
    />)
    }
  })
  if(!allProducts.length){
    return (<h2 className="pink">No loves added yet</h2>)
  } else {
    return allProducts
  }
}

export default ProductCollection;

ProductCollection.propTypes = {
  products: PropTypes.array,
  toggleFavorite: PropTypes.func
}  