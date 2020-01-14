import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMakeup } from "../../apiCalls";
import PropTypes from "prop-types";
import {
  loadError,
  loadLoading,
  loadBlush,
  loadBronzer,
  loadEyebrow,
  loadEyeliner,
  loadEyeshadow,
  loadFoundation,
  loadLipliner,
  loadLipstick,
  loadMascara
} from "../../actions";
import { sampleProducts } from "../../sampleCall";
import { dataCleanup } from "../../dataCleaner";

export class NavBar extends Component {
  pickProduct = async e => {
    let beautyProduct = e.target.name;
    let cammelName =
      beautyProduct[0].toUpperCase() +
      beautyProduct.substring(1, beautyProduct.length);
    if(cammelName === "Lip_liner"){
      // beautyProduct = "lip_liner"
      cammelName = "Lipliner"
    }
    // console.log(beautyProduct)
    console.log(cammelName);
    if (!this.props[beautyProduct].length) {
      try {
        this.props.loadLoading(true);
        const products = await fetchMakeup(beautyProduct);
        // const products = sampleProducts;
        let cleanProducts = dataCleanup(products);
        this.props[`load${cammelName}`](cleanProducts);
        this.props.loadLoading(false);
      } catch ({ errorMsg }) {
        this.props.loadError(errorMsg);
      }
    } else {
      this.props[`load${cammelName}`](this.props[beautyProduct]);
    }
    // };
  };

  render() {
    const products = [
      "blush",
      "bronzer",
      "eyebrow",
      "eyeliner",
      "eyeshadow",
      "foundation",
      "lip_liner",
      "lipstick",
      "mascara"
    ];
    let allProducts = products.map(categ => {
      return (
        <NavLink
          to={`/${categ}`}
          className={`nav-word ${categ.toLowerCase()}`}
          name={`${categ}`}
          onClick={this.pickProduct}
        >
          { categ === "lip_liner" ? "Lip Liner" : categ[0].toUpperCase() + categ.substring(1, categ.length)}
        </NavLink>
      );
    });
    return (
      <>
        <nav>
          <NavLink to="/" className="nav-word">
            Home
          </NavLink>
          {allProducts}
          <NavLink to="/loves" className="nav-word red loves" name="loves">
            Loves list
          </NavLink>
        </nav>
      </>
    );
  }
}

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
  loading: state.loading,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  loadBlush: products => dispatch(loadBlush(products)),
  loadBronzer: products => dispatch(loadBronzer(products)),
  loadEyebrow: products => dispatch(loadEyebrow(products)),
  loadEyeliner: products => dispatch(loadEyeliner(products)),
  loadEyeshadow: products => dispatch(loadEyeshadow(products)),
  loadFoundation: products => dispatch(loadFoundation(products)),
  loadLipliner: products => dispatch(loadLipliner(products)),
  loadLipstick: products => dispatch(loadLipstick(products)),
  loadMascara: products => dispatch(loadMascara(products)),
  loadLoading: waiting => dispatch(loadLoading(waiting)),
  loadError: error => dispatch(loadError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

NavBar.propTypes = {
  blush: PropTypes.array,
  bronzer: PropTypes.array,
  eyebrow: PropTypes.array,
  eyeliner: PropTypes.array,
  eyeshadow: PropTypes.array,
  foundation: PropTypes.array,
  lip_liner: PropTypes.array,
  lipstick: PropTypes.array,
  mascara: PropTypes.array,
  isLoading: PropTypes.bool,
  loadBlush: PropTypes.func,
  loadBronzer: PropTypes.func,
  loadEyebrow: PropTypes.func,
  loadEyeliner: PropTypes.func,
  loadEyeshadow: PropTypes.func,
  loadFoundation: PropTypes.func,
  loadLipliner: PropTypes.func,
  loadLipstick: PropTypes.func,
  loadMascara: PropTypes.func,
  loadLoading: PropTypes.func,
  error: PropTypes.string
};
