import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCollection from '../../components/ProductCollection/ProductCollection';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router';
import Landing from '../../components/Landing/Landing';
import { loadLoading, loadFavorites, addFavoriteId, deleteFavorite } from '../../actions';
import NotFound from '../../components/NotFound/NotFound';
import DetailPage from '../../components/DetailPage/DetailPage';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  
  componentDidMount = () => {
  }

  findFavorite = (id) => {
    const allProducts = [...this.props.blush, this.props.bronzer, this.props.lipstick, this.props.lip_liner, this.props.mascara, this.props.foundation, this.props.eyeliner, this.props.eyeshadow, this.props.eyebrow].flat()
    return allProducts.find(product => product.id === id).id
  }

  toggleFavorite = (id) => {
    let favorite = this.findFavorite(id);
    if(!this.props.favorites.includes(favorite)){
      this.props.addFavoriteId(id)
    } else {
      this.props.deleteFavorite(id)
    }
  }

  setFavorites = () => {
    const allProducts = [...this.props.blush, this.props.bronzer, this.props.lipstick, this.props.lip_liner, this.props.mascara, this.props.foundation, this.props.eyeliner, this.props.eyeshadow, this.props.eyebrow].flat()
    const favoriteProducts = allProducts.filter(product => this.props.favorites.includes(product.id))
    return favoriteProducts
  }
  
  render(){
    const allProducts = [...this.props.blush, this.props.bronzer, this.props.lipstick, this.props.lip_liner, this.props.mascara, this.props.foundation, this.props.eyeliner, this.props.eyeshadow, this.props.eyebrow].flat()
    return(
      <section className="App">
            {/* <Banner /> */}
        <NavBar />
        <Route exact path='/' component={Landing}/>
        <section className="product-collection">      
          {this.props.isLoading && <h1 className="loading">Loading...</h1>}  
          <Switch>
          <Route exact path='/blush' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.blush} />} />
          <Route exact path='/bronzer' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.bronzer}/>}/>
          <Route exact path='/eyebrow' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.eyebrow}/>}/>
          <Route exact path='/eyeliner' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.eyeliner}/>}/>
          <Route exact path='/eyeshadow' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.eyeshadow}/>}/>
          <Route exact path='/foundation' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.foundation}/>}/>
          <Route exact path='/lip_liner' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.lip_liner}/>}/>
          <Route exact path='/lipstick' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.lipstick}/>}/>
          <Route exact path='/mascara' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.props.mascara}/>}/>
          <Route exact path='/loves' render={() => <ProductCollection toggleFavorite={this.toggleFavorite} products={this.setFavorites()}/>}/>
          <Route exact path='/blush/:id' render={ ({match}) => {
            const selectedProduct = this.props.blush.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }
          }/>
          <Route exact path='/bronzer/:id' render={ ({match}) => {
            const selectedProduct = this.props.bronzer.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/eyebrow/:id' render={ ({match}) => {
            const selectedProduct = this.props.eyebrow.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/eyeliner/:id' render={ ({match}) => {
            const selectedProduct = this.props.eyeliner.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/eyeshadow/:id' render={ ({match}) => {
            const selectedProduct = this.props.eyeshadow.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/foundation/:id' render={ ({match}) => {
            const selectedProduct = this.props.foundation.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/lip_liner/:id' render={ ({match}) => {
            const selectedProduct = this.props.lip_liner.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/lipstick/:id' render={ ({match}) => {
            const selectedProduct = this.props.lipstick.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route exact path='/mascara/:id' render={ ({match}) => {
            const selectedProduct = this.props.mascara.find(product => product.id === parseInt(match.params.id));
            return <DetailPage match={match} {...selectedProduct} toggleFavorite={this.toggleFavorite} allProducts={allProducts}/>
            }}/>
          <Route path='*' component={NotFound}/>
          </Switch>
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
  isLoading: state.isLoading,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  loadLoading: waiting => dispatch(loadLoading(waiting)),
  loadFavorites: favorites => dispatch(loadFavorites(favorites)),
  addFavoriteId: id => dispatch(addFavoriteId(id)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
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
  isLoading: PropTypes.bool,
  favorites: PropTypes.array
};