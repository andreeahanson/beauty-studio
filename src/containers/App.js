import React, { Component } from 'react';
import './App.css';
// import { fetchMakeup } from '../apiCalls';
import { connect } from 'react-redux';
import ProductCollection from '../components/ProductCollection';
import { sampleProducts } from '../sampleCall';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import { Switch, Route } from 'react-router';
import Landing from '../components/Landing';
import { isLoading } from '../actions';
import { Redirect } from 'react-router'


class App extends Component {
  constructor(){
    super();
    this.state = {
      // isLoading: true
    }
  }
  
  componentDidMount = () => {
    // const makeup = await fetchMakeup()
    // await console.log(makeup)
    // await this.props.loadProducts(makeup)
    // this.setState({isLoading: false})
    
  }
  
  render(){
    console.log(this.props)
    return(
      <section className="App">
            {/* <Banner /> */}
        <NavBar />
        <Route exact path='/' component={Landing}/>
        <section className="product-collection">
          {this.props.isLoading(true) && <Redirect to='/loading'/>}
          <Route exact path='/blush' render={() => <ProductCollection products={this.props.blush} />} />
          <Route exact path='/bronzer' render={() => <ProductCollection products={this.props.bronzer}/>}/>
          <Route exact path='/eyebrow' render={() => <ProductCollection products={this.props.eyebrow}/>}/>
          <Route exact path='/eyeliner' render={() => <ProductCollection products={this.props.eyeliner}/>}/>
          <Route exact path='/eyeshadow' render={() => <ProductCollection products={this.props.eyeshadow}/>}/>
          <Route exact path='/foundation' render={() => <ProductCollection products={this.props.foundation}/>}/>
          <Route exact path='/lip_liner' render={() => <ProductCollection products={this.props.lip_liner}/>}/>
          <Route exact path='/lipstick' render={() => <ProductCollection products={this.props.lipstick}/>}/>
          <Route exact path='/mascara' render={() => <ProductCollection products={this.props.mascara}/>}/>
          <Route exact path='/loading' render={()=> <h1>Loading</h1>} />
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
  loves: state.loves
})

const mapDispatchToProps = (dispatch) => ({
  isLoading: waiting => dispatch(isLoading(waiting))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);