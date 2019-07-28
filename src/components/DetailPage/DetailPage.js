import React from 'react';
import './DetailPage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export const DetailPage = ({match, toggleFavorite, id, brand, price, image_link, name, product_type, product_link, description, rating, tag_list, product_colors, favorites}) => {
   let allColors = product_colors.map(color => {
    const divStyle = {
      backgroundColor: color.hex_value
    }
    return (
        <div className="align-vertically">
          <p className="color-names marg">{color.colour_name}</p>
          <div className="colors marg" style={divStyle}></div>
      </div>
    )
  })

    let qualities = tag_list.map(element => <li>{element}</li>)
  return (
    <section className="whole-detail-page">
      <NavLink to={`/${product_type}`} className="go-back detail">Go Back</NavLink>
      <div className="align-colors-and-details">
        <div className="align">
          <img className="detail-page-image" src={image_link} alt='beauty-product' />
          <div className="detail-page">
            <h5>{brand}</h5>
            <h3>{name}</h3>
            <h4>$ {price}</h4>
            <img onClick={()=>toggleFavorite(id)} className="heart" alt="heart" src={favorites.includes(id) ? 'https://ui-ex.com/images/svg-heart-transparent-background.png' : 'https://images.vexels.com/media/users/3/156965/isolated/preview/cc193f8f5c8e89553153055f410288f9-simple-heart-silhouette-by-vexels.png'} />
            <p className="description detail">Description: {description}</p>
            <p className="find-link detail">Find the product here: {product_link}</p>
            <h5 className="rating detail">Rating: {rating ? rating : 'not yet rated'}</h5>
            <h5>Product tags: </h5>
            <ul className="tags detail">{qualities.length ? qualities : 'no tags for this product'}</ul>
          </div>
        </div>
          <h3>Color pallete</h3>
          <div className="color-box">
            {allColors}
          </div>
      </div>
    </section>
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