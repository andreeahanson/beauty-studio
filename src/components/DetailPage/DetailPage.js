import React from "react";
import "./DetailPage.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import NotesForm from "../NotesForm/NotesForm";

export const DetailPage = ({
  match,
  toggleFavorite,
  id,
  brand,
  price,
  image_link,
  name,
  product_type,
  product_link,
  description,
  rating,
  tag_list,
  product_colors,
  favorites
}) => {
  let allColors = product_colors.map(color => {
    const divStyle = {
      backgroundColor: color.hex_value
    };
    return (
      <div key={Date.now()} className="align-vertically">
        <p className="color-names marg">{color.colour_name}</p>
        <div className="colors marg" style={divStyle} />
      </div>
    );
  });

  let qualities = tag_list.map(element => <li>{element}</li>);
  return (
    <>
      <NavLink to={`/${product_type}`} className="go-back detail">
        ◀️ Go Back
      </NavLink>
      <section className="whole-detail-page">
        <div className="left-side">
          <img
            className="detail-page-image"
            src={image_link}
            alt="beauty-product"
          />
          <h4 className="rating detail">
            Rating: {rating ? rating : "not yet rated"}
          </h4>
          <h4>Product tags: </h4>

          <div className="link-details">
            <ul className="tags detail">
              {qualities.length ? qualities : "no tags for this product"}
            </ul>
            <h4 className="find-link detail">Find the product here: </h4>
            <Link to={`${product_link}`}>{product_link}</Link>
          </div>
        </div>

        <div className="right-side">
          <h5 className="brand">{brand}</h5>
          <h3>{name}</h3>
          {/* <h4>$ {price}</h4> */}
          <p className="description detail">Description: {description}</p>
          <h3>Color pallete</h3>
          <div className="color-box">{allColors}</div>
        </div>
        <NotesForm />
      </section>
    </>
  );
};

export const mapStateToProps = state => ({
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
});

export default connect(mapStateToProps)(DetailPage);

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
  toggleFavorite: PropTypes.func,
  id: PropTypes.number,
  brand: PropTypes.string,
  price: PropTypes.string,
  image_link: PropTypes.string,
  name: PropTypes.string,
  product_type: PropTypes.string,
  product_link: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  tag_list: PropTypes.array,
  product_colors: PropTypes.array
};
