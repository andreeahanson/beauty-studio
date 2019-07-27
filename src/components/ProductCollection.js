import React from 'react';
import ProductCard from '../containers/ProductCard';
import { connect } from 'react-redux';
import { loadBlush, loadBronzer, loadEyebrow, loadEyeliner, loadEyeshadow, loadFoundation, loadLipliner, loadLipstick, loadMascara} from '../actions';

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


const mapStateToProps = state => ({
  blush: state.blush,
  bronzer: state.bronzer,
  eyebrow: state.eyebrow,
  eyeliner: state.eyeliner,
  eyeshadow: state.eyeshadow,
  foundation: state.foundation,
  lip_liner: state.lip_liner,
  lipstick: state.lipstick,
  mascara: state.mascara,
  loves: state.loves
})

const mapDispatchToProps = dispatch => ({
  loadBlush: products => dispatch(loadBlush(products)),
  loadBronzer: products => dispatch(loadBronzer(products)),
  loadEyebrow: products => dispatch(loadEyebrow(products)),
  loadEyeliner: products => dispatch(loadEyeliner(products)),
  loadEyeshadow: products => dispatch(loadEyeshadow(products)),
  loadFoundation: products => dispatch(loadFoundation(products)),
  loadLipliner: products => dispatch(loadLipliner(products)),
  loadLipstick: products => dispatch(loadLipstick(products)),
  loadMascara: products => dispatch(loadMascara(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCollection);
