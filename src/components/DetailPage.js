import React from 'react';
import './DetailPage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const DetailPage = ({match, toggleFavorite, id, brand, price, image_link, name, product_type, description, product_colors, favorites}) => {
   let allColors = product_colors.map(color => {
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
    <>
      <figure className="detail-page">
      <h5>{brand}</h5>
      <h3>{name}</h3>
      <h4>$ {price}</h4>
      <img className="selectedProduct-image" src={image_link} alt='beauty-product' />
      <p className='bottom-card'>
      <img onClick={()=>toggleFavorite(id)} className="heart" alt="heart" src={favorites.includes(id) ? 'https://ui-ex.com/images/svg-heart-transparent-background.png' : 'https://images.vexels.com/media/users/3/156965/isolated/preview/cc193f8f5c8e89553153055f410288f9-simple-heart-silhouette-by-vexels.png'} />
      </p>
      <p>{description}</p>
      {allColors}
      </figure>
    </>
  )
}

const mapStateToProps = (state) => ({
  blush: state.blush, 
  bronzer: state.bronzer,
  eyebrow: state.eyebrow,
  eyeliner: state.eyeliner,
  eyeshadow: state.eyeshadow,
  foundation: state.foundation,
  lip_liner: state.lip_liner,
  lipstick: state.lipstick,
  mascara: state.mascara,
  isLoading: state.isLoading,
  favorites: state.favorites
})

export default connect(mapStateToProps)(DetailPage)

DetailPage.propTypes = {
  blush: PropTypes.array,  
  bronzer: PropTypes.array,
  eyebrow: PropTypes.array,
  eyeliner: PropTypes.array,
  eyeshadow: PropTypes.array,
  foundation: PropTypes.array,
  lip_liner: PropTypes.array,
  lipstick: PropTypes.array,
  mascara: PropTypes.array,
  favorites: PropTypes.array,
  match: PropTypes.object,
  toggleFavorite: PropTypes.func
};