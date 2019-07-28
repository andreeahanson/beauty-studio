import React from 'react';
import './ProductCard.css';
// import { connect } from 'react-redux';
// import { addFavorite } from '../actions';  

const ProductCard = ({id, key, brand, name, price, image, colors, description, type, tagList, toggleFavorite}) => {
  // let allColors = 
  colors.map(color => {
    const divStyle = {
      backgroundColor: color.hex_value
    }
    return (
      <div className="align-vertically">
        <p className="color-names">{color.colour_name}</p>
        <div className="colors" style={divStyle}></div>
      </div>
    )
  })
  return (
    <article>
      <h5>{brand}</h5>
      <h3>{name}</h3>
      <h4>$ {price}</h4>
      <img className="product-image" src={image} alt='beauty-product' />
      <p className='bottom-card'>
      {/* <img className="heart" src={'https://ui-ex.com/images/svg-heart-transparent-background.png'} /> */}
      <img onClick={()=>toggleFavorite(id)} className="heart" alt="heart" src={'https://images.vexels.com/media/users/3/156965/isolated/preview/cc193f8f5c8e89553153055f410288f9-simple-heart-silhouette-by-vexels.png'} />
      </p>
    </article>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   addFavorite: newFavoriteId => dispatch(addFavorite(newFavoriteId))
// })

// export default connect(null,mapDispatchToProps)(ProductCard);

export default ProductCard;