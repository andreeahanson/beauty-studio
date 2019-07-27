import React, { Component } from 'react';
import './NavBar.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMakeup } from '../apiCalls';
import ProductCollection from './ProductCollection'
import { loadBlush, loadBronzer, loadEyebrow, loadEyeliner, loadEyeshadow, loadFoundation, loadLipliner, loadLipstick, loadMascara} from '../actions';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  pickBlush = async (e) => {
    if(!this.props.blush.length){
      const products = await fetchMakeup(e.target.name);
      this.props.loadBlush(products)
    } else {
      this.props.loadBlush(this.props.blush)
    }
  }

  pickBronzer = async (e) => {
    if(!this.props.bronzer.length){
      const products = await fetchMakeup(e.target.name);
      this.props.loadBronzer(products)
    } else {
      this.props.loadBronzer(this.props.bronzer)
    }
  }

  pickEyebrow = async (e) => {
    if(!this.props.eyebrow.length){
      const products = await fetchMakeup(e.target.name);
      this.props.loadEyebrow(products)
    } else {
      this.props.loadEyebrow(this.props.eyebrow)
    }
  }

  pickEyeliner = async (e) => {
    if(!this.props.eyeliner.length){
    const products = await fetchMakeup(e.target.name);
    this.props.loadEyeliner(products)
    } else {
      this.props.loadEyeliner(this.props.eyeliner)
    }
  }

  pickEyeshadow = async (e) => {
    if(!this.props.eyeshadow.length){
    const products = await fetchMakeup(e.target.name);
    this.props.loadEyeshadow(products)
  } else {
    this.props.loadEyeshadow(this.props.eyeshadow)
  }
  }

  pickFoundation = async (e) => {
    if(!this.props.eyeshadow.length){
    const products = await fetchMakeup(e.target.name);
    this.props.loadFoundation(products)
  } else {
    this.props.loadFoundation(this.props.foundation)
  }
  }

  pickLipliner = async (e) => {
    if(!this.props.lip_liner.length){
    const products = await fetchMakeup(e.target.name);
    this.props.loadLipliner(products)
     } else {
      this.props.loadLipliner(this.props.lip_liner)
    }
  }

  pickLipstick = async (e) => {
    if(!this.props.lipstick.length){
    const products = await fetchMakeup(e.target.name);
    this.props.loadLipstick(products)
    } else {
      this.props.loadLipstick(this.props.lipstick)
    }
  }

  pickMascara = async (e) => {
    if(!this.props.mascara.length){
    const products = await fetchMakeup(e.target.name);
    this.props.loadMascara(products)
  } else {
    this.props.loadMascara(this.props.mascara)
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
  loadMascara: products => dispatch(loadMascara(products))
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