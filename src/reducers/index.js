import { combineReducers } from 'redux';
import { blushReducer,bronzerReducer, eyebrowReducer, eyelinerReducer, eyeshadowReducer, foundationReducer, liplinerReducer, lipstickReducer, mascaraReducer } from './ProductsReducer';

export const rootReducer = combineReducers({
  blush: blushReducer,
  bronzer: bronzerReducer,
  eyebrow: eyebrowReducer,
  eyeliner: eyelinerReducer,
  eyeshadow: eyeshadowReducer,
  foundation: foundationReducer,
  lip_liner: liplinerReducer,
  lipstick: lipstickReducer,
  mascara: mascaraReducer,
})