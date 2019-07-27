export const blushReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_BLUSH':
      return action.blush;
    default: 
      return state;
  }
}

export const bronzerReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_BRONZER':
      return action.bronzer;
    default: 
      return state;
  }
}

export const eyebrowReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_EYEBROW':
      return action.eyebrow;
    default: 
      return state;
  }
}

export const eyelinerReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_EYELINER':
      return action.eyeliner;
    default: 
      return state;
  }
}

export const eyeshadowReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_EYESHADOW':
      return action.eyeshadow;
    default: 
      return state;
  }
}

export const foundationReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_FOUNDATION':
      return action.foundation;
    default: 
      return state;
  }
}

export const liplinerReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_LIPLINER':
      return action.lip_liner;
    default: 
      return state;
  }
}

export const lipstickReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_LIPSTICK':
      return action.lipstick;
    default: 
      return state;
  }
}

export const mascaraReducer = (state=[], action) => {
  switch(action.type){
    case 'LOAD_MASCARA':
      return action.mascara;
    default: 
      return state;
  }
}

export const isLoadingReducer = (state=false, action) => {
  switch(action.type){
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state;
  }
}