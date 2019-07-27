import React, { Component } from 'react';
import './NavBar.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMakeup } from '../apiCalls';
import ProductCollection from './ProductCollection'
import { isLoading, loadBlush, loadBronzer, loadEyebrow, loadEyeliner, loadEyeshadow, loadFoundation, loadLipliner, loadLipstick, loadMascara} from '../actions';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  pickBlush = async (e) => {
    if(!this.props.blush.length){
      this.props.isLoading(true)
      const products = await fetchMakeup(e.target.name);
      this.props.loadBlush(products)
      this.props.isLoading(false)
    } else {
      this.props.loadBlush(this.props.blush)
    }
  }

  pickBronzer = async (e) => {
    if(!this.props.bronzer.length){
      this.props.isLoading(true)
      const products = await fetchMakeup(e.target.name);
      this.props.loadBronzer(products)
      this.props.isLoading(false)
    } else {
      this.props.loadBronzer(this.props.bronzer)
      this.props.isLoading(false)
    }
  }

  pickEyebrow = async (e) => {
    if(!this.props.eyebrow.length){
      this.props.isLoading(true)
      const products = await fetchMakeup(e.target.name);
      this.props.loadEyebrow(products)
      this.props.isLoading(false)
    } else {
      this.props.loadEyebrow(this.props.eyebrow)
      this.props.isLoading(false)
    }
  }

  pickEyeliner = async (e) => {
    if(!this.props.eyeliner.length){
      this.props.isLoading(true)
    const products = await fetchMakeup(e.target.name);
    this.props.loadEyeliner(products)
    this.props.isLoading(false)
    } else {
      this.props.loadEyeliner(this.props.eyeliner)
      this.props.isLoading(false)
    }
  }

  pickEyeshadow = async (e) => {
    if(!this.props.eyeshadow.length){
    this.props.isLoading(true)
    const products = await fetchMakeup(e.target.name);
    this.props.loadEyeshadow(products)
    this.props.isLoading(false)
  } else {
    this.props.loadEyeshadow(this.props.eyeshadow)
    this.props.isLoading(false)
  }
  }

  pickFoundation = async (e) => {
    if(!this.props.eyeshadow.length){
      this.props.isLoading(true)
    const products = await fetchMakeup(e.target.name);
    this.props.loadFoundation(products)
    this.props.isLoading(false)
  } else {
    this.props.loadFoundation(this.props.foundation)
    this.props.isLoading(false)
  }
  }

  pickLipliner = async (e) => {
    if(!this.props.lip_liner.length){
      this.props.isLoading(true)
    const products = await fetchMakeup(e.target.name);
    this.props.loadLipliner(products)
    this.props.isLoading(false)
     } else {
      this.props.loadLipliner(this.props.lip_liner)
      this.props.isLoading(false)
    }
  }

  pickLipstick = async (e) => {
    if(!this.props.lipstick.length){
      this.props.isLoading(true)
    const products = await fetchMakeup(e.target.name);
    this.props.loadLipstick(products)
    this.props.isLoading(false)
    } else {
      this.props.loadLipstick(this.props.lipstick)
      this.props.isLoading(false)
    }
  }

  pickMascara = async (e) => {
    if(!this.props.mascara.length){
      this.props.isLoading(true)   
    const products = await fetchMakeup(e.target.name);
    this.props.loadMascara(products)
    this.props.isLoading(false)
  } else {
    this.props.loadMascara(this.props.mascara)
    this.props.isLoading(false)
  }
  }

  render() {
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
  loadMascara: products => dispatch(loadMascara(products)),
  isLoading: waiting => dispatch(isLoading(waiting))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);




// const NavBar = () => {

//   return (
//     <nav>
//       <NavLink to="/blush" className="nav-word">Blush</NavLink>
//       <NavLink to="/bronzer" className="nav-word">Bronzer</NavLink>
//       <NavLink to="/eyebrow" className="nav-word">Eyebrow</NavLink>
//       <NavLink to="/eyeliner" className="nav-word">Eyeliner</NavLink>
//       <NavLink to="/eyeshadow" className="nav-word">Eyeshadow</NavLink>
//       <NavLink to="/foundation" className="nav-word">Foundation</NavLink>
//       <NavLink to="/lip_liner" className="nav-word">Lip Liner</NavLink>
//       <NavLink to="/lipstick" className="nav-word">Lipstick</NavLink>
//       <NavLink to="/mascara" className="nav-word">Mascara</NavLink>
//       <NavLink to="/" className="nav-word red">Loves list</NavLink>
//     </nav>
//   )
// }

// export default NavBar;