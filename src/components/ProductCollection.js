import React from 'react';
import ProductCard from '../containers/ProductCard';
import PropTypes from 'prop-types';

const ProductCollection = (products) => {
  const allProducts = products.products.map(product => {
    if(product.price != 0){
    return (
    <ProductCard 
    id={product.created_at}
    key={product.created_at}
    brand={product.brand}
    name={product.name} 
    description={product.description}
    price={product.price} 
    image={product.image_link} 
    colors={product.product_colors}
    type={product.product_type}
    tagList={product.tag_list}
    />)
    }
  })
  return allProducts
}

export default ProductCollection;

ProductCollection.propTypes = {
  products: PropTypes.array
}  