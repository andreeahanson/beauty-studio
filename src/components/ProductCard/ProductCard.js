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
      <div className="top-card">
        <h5 className="card-brand">{brand}</h5>
        <h4 className="card-name">{name}</h4>
        <h5>$ {price}</h5>
      </div>

      <img className="product-image" src={image} alt="beauty-product" />

      <div className="bottom-card">
        <img
          onClick={() => toggleFavorite(id)}
          className="heart"
          alt="heart"
          src={
            favorites.includes(id)
              ? "http://pngimg.com/uploads/heart/heart_PNG51182.png"
              : "https://images.vexels.com/media/users/3/156965/isolated/preview/cc193f8f5c8e89553153055f410288f9-simple-heart-silhouette-by-vexels.png"
          }
        />
        <Link className="detail-link" to={`${type}/${id}`}>
          Details
        </Link>
      </div>
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
  price: PropTypes.string,
  image: PropTypes.string,
  colors: PropTypes.array,
  description: PropTypes.string,
  type: PropTypes.string,
  tagList: PropTypes.array,
  toggleFavorite: PropTypes.func
};
