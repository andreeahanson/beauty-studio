import React, { Component } from 'react';
import './App.css';
import { fetchMakeup } from '../apiCalls';
import { connect } from 'react-redux';
import { loadProducts } from '../actions';
import ProductCollection from '../components/ProductCollection';
import { sampleProducts } from '../sampleCall';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

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
      <section className="App">
            <Banner />
            <NavBar />
          <section className="product-collection">
            <p className="intro shimmer">Mirror, mirror on the wall, who's the smartest, strongest, inner and outer beauty of them all?</p>
            {/* <ProductCollection products={products} /> */}
          </section>
      </section>
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