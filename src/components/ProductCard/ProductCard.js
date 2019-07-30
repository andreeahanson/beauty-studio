import React from "react";
import "./ProductCard.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  key,
  brand,
  name,
  price,
  image,
  colors,
  description,
  type,
  tagList,
  toggleFavorite,
  favorites
}) => {
  return (
    <article>
      <h5>{brand}</h5>
      <h3>{name}</h3>
      <h4>$ {price}</h4>
      <img className="product-image" src={image} alt="beauty-product" />
      <p className="bottom-card">
        <img
          onClick={() => toggleFavorite(id)}
          className="heart"
          alt="heart"
          src={
            favorites.includes(id)
              ? "https://ui-ex.com/images/svg-heart-transparent-background.png"
              : "https://images.vexels.com/media/users/3/156965/isolated/preview/cc193f8f5c8e89553153055f410288f9-simple-heart-silhouette-by-vexels.png"
          }
        />
      </p>
      <Link to={`${type}/${id}`}>Details</Link>
    </article>
  );
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(ProductCard);

ProductCard.propTypes = {
  favorites: PropTypes.array,
  id: PropTypes.number,
  key: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  colors: PropTypes.array,
  description: PropTypes.string,
  type: PropTypes.string,
  tagList: PropTypes.array,
  toggleFavorite: PropTypes.func
};
