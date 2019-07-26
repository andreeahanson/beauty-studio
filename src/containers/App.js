import React, { Component } from 'react';
import './App.css';
import { fetchMakeup } from '../apiCalls';
import { connect } from 'react-redux';
import { loadProducts } from '../actions';
import ProductCollection from '../components/ProductCollection';
import { sampleProducts } from '../sampleCall';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  
  componentDidMount = async () => {
    // const makeup = await fetchMakeup()
    // await console.log(makeup)
    // await this.props.loadProducts(makeup)
    
  }
  
  render(){
    let products = sampleProducts;
    this.props.loadProducts(products)
    console.log(products)
    // const {products} = this.props
    return(
      <>
      <section className="App">
            {/* <Banner /> */}
            <NavBar />
        <Route exact path='/' render={() => <Landing />}/>
          <section className="product-collection">
      <Switch>
        <Route exact path='/blush' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/bronzer' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/eyebrow' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/eyeliner' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/eyeshadow' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/foundation' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/lipliner' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/lipstick' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/mascara' render={() => <ProductCollection products={products}/>}/>
        <Route exact path='/loves' render={() => <ProductCollection />}/>
      </Switch>
          </section>
      </section>
    </>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  loadProducts: products => dispatch(loadProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);