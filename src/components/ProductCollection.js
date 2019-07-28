import React from 'react';
import ProductCard from '../containers/ProductCard';
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
  return allProducts
}

export default ProductCollection;

ProductCollection.propTypes = {
  products: PropTypes.array
}  