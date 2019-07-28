import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCollection from '../components/ProductCollection';
import NavBar from '../components/NavBar';
import { Route } from 'react-router';
import Landing from '../components/Landing';
import { loadLoading } from '../actions';
// import { Redirect } from 'react-router'


class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  
  componentDidMount = () => {
  }
  
  render(){
    return(
      <section className="App">
            {/* <Banner /> */}
        <NavBar />
        <Route exact path='/' component={Landing}/>
        <section className="product-collection">      
          {this.props.isLoading && <h1>Loading...</h1>}  
          <Route exact path='/blush' render={() => <ProductCollection products={this.props.blush} />} />
          <Route exact path='/bronzer' render={() => <ProductCollection products={this.props.bronzer}/>}/>
          <Route exact path='/eyebrow' render={() => <ProductCollection products={this.props.eyebrow}/>}/>
          <Route exact path='/eyeliner' render={() => <ProductCollection products={this.props.eyeliner}/>}/>
          <Route exact path='/eyeshadow' render={() => <ProductCollection products={this.props.eyeshadow}/>}/>
          <Route exact path='/foundation' render={() => <ProductCollection products={this.props.foundation}/>}/>
          <Route exact path='/lip_liner' render={() => <ProductCollection products={this.props.lip_liner}/>}/>
          <Route exact path='/lipstick' render={() => <ProductCollection products={this.props.lipstick}/>}/>
          <Route exact path='/mascara' render={() => <ProductCollection products={this.props.mascara}/>}/>
          <Route exact path='/loves' render={() => <ProductCollection />}/>
        </section>
      </section>
    )
  }
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
  loves: state.loves,
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  loadLoading: waiting => dispatch(loadLoading(waiting))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


App.propTypes = {
  blush: PropTypes.array,  
  bronzer: PropTypes.array,
  eyebrow: PropTypes.array,
  eyeliner: PropTypes.array,
  eyeshadow: PropTypes.array,
  foundation: PropTypes.array,
  lip_liner: PropTypes.array,
  lipstick: PropTypes.array,
  mascara: PropTypes.array, 
  loves: PropTypes.array, 
  isLoading: PropTypes.bool,
};