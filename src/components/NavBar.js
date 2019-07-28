import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMakeup } from '../apiCalls';
import PropTypes from 'prop-types';
import { loadLoading, loadBlush, loadBronzer, loadEyebrow, loadEyeliner, loadEyeshadow, loadFoundation, loadLipliner, loadLipstick, loadMascara} from '../actions';
import { sampleProducts } from '../sampleCall'


class NavBar extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  pickBlush = async (e) => {
    if(!this.props.blush.length){
      this.props.loadLoading(true)
      // const products = await fetchMakeup(e.target.name);
      const products = sampleProducts;
      this.props.loadBlush(products)
      this.props.loadLoading(false)
    } else {
      this.props.loadBlush(this.props.blush)
    }
  }

  pickBronzer = async (e) => {
    if(!this.props.bronzer.length){
      this.props.loadLoading(true)
      // const products = await fetchMakeup(e.target.name);
      const products = sampleProducts;
      this.props.loadBronzer(products)
      this.props.loadLoading(false)
    } else {
      this.props.loadBronzer(this.props.bronzer)
      this.props.loadLoading(false)
    }
  }

  pickEyebrow = async (e) => {
    if(!this.props.eyebrow.length){
      this.props.loadLoading(true)
      // const products = await fetchMakeup(e.target.name);
      const products = sampleProducts;
      this.props.loadEyebrow(products)
      this.props.loadLoading(false)
    } else {
      this.props.loadEyebrow(this.props.eyebrow)
      this.props.loadLoading(false)
    }
  }

  pickEyeliner = async (e) => {
    if(!this.props.eyeliner.length){
      this.props.loadLoading(true)
    // const products = await fetchMakeup(e.target.name);
    const products = sampleProducts;
    this.props.loadEyeliner(products)
    this.props.loadLoading(false)
    } else {
      this.props.loadEyeliner(this.props.eyeliner)
      this.props.loadLoading(false)
    }
  }

  pickEyeshadow = async (e) => {
    if(!this.props.eyeshadow.length){
    this.props.loadLoading(true)
    // const products = await fetchMakeup(e.target.name);
    const products = sampleProducts;
    this.props.loadEyeshadow(products)
    this.props.loadLoading(false)
  } else {
    this.props.loadEyeshadow(this.props.eyeshadow)
    this.props.loadLoading(false)
  }
  }

  pickFoundation = async (e) => {
    if(!this.props.foundation.length){
      this.props.loadLoading(true)
    // const products = await fetchMakeup(e.target.name);
    const products = sampleProducts;
    this.props.loadFoundation(products)
    this.props.loadLoading(false)
  } else {
    this.props.loadFoundation(this.props.foundation)
    this.props.loadLoading(false)
  }
  }

  pickLipliner = async (e) => {
    if(!this.props.lip_liner.length){
      this.props.loadLoading(true)
    // const products = await fetchMakeup(e.target.name);
    const products = sampleProducts;
    this.props.loadLipliner(products)
    this.props.loadLoading(false)
     } else {
      this.props.loadLipliner(this.props.lip_liner)
      this.props.loadLoading(false)
    }
  }

  pickLipstick = async (e) => {
    if(!this.props.lipstick.length){
      this.props.loadLoading(true)
    // const products = await fetchMakeup(e.target.name);
    const products = sampleProducts;
    this.props.loadLipstick(products)
    this.props.loadLoading(false)
    } else {
      this.props.loadLipstick(this.props.lipstick)
      this.props.loadLoading(false)
    }
  }

  pickMascara = async (e) => {
    if(!this.props.mascara.length){
      this.props.loadLoading(true)   
    // const products = await fetchMakeup(e.target.name);
    const products = sampleProducts;
    this.props.loadMascara(products)
    this.props.loadLoading(false)
  } else {
    this.props.loadMascara(this.props.mascara)
    this.props.loadLoading(false)
  }
  }

  render() {
    console.log(this.props.mascara)
    return (
      <>
      <nav>
        <NavLink to="/" className="nav-word">Home</NavLink>
        <NavLink to="/blush" className="nav-word" name="blush" onClick={this.pickBlush}>Blush</NavLink>
        <NavLink to="/bronzer" className="nav-word" name="bronzer" onClick={this.pickBronzer}>Bronzer</NavLink>
        <NavLink to="/eyebrow" className="nav-word" name="eyebrow" onClick={this.pickEyebrow}>Eyebrow</NavLink>
        <NavLink to="/eyeliner" className="nav-word" name="eyeliner" onClick={this.pickEyeliner}>Eyeliner</NavLink>
        <NavLink to="/eyeshadow" className="nav-word" name="eyeshadow" onClick={this.pickEyeshadow}>Eyeshadow</NavLink>
        <NavLink to="/foundation" className="nav-word" name="foundation" onClick={this.pickFoundation}>Foundation</NavLink>
        <NavLink to="/lip_liner" className="nav-word" name="lip_liner" onClick={this.pickLipliner}>Lip Liner</NavLink>
        <NavLink to="/lipstick" className="nav-word" name="lipstick" onClick={this.pickLipstick}>Lipstick</NavLink>
        <NavLink to="/mascara" className="nav-word" name="mascara" onClick={this.pickMascara}>Mascara</NavLink>
        <NavLink to="/loves" className="nav-word red" name="loves">Loves list</NavLink>
      </nav>
    </>
    )
  }
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
  mascara: state.mascara
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
  loadMascara: products => dispatch(loadMascara(products)),
  loadLoading: waiting => dispatch(loadLoading(waiting))
})

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
};