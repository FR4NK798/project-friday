import {GET_SONG_HOME_PAGE} from '../actions'


const initialState = {
    musicHome: [], 
  }
  
const songHomepageReducer =(state=initialState, action)=>{
  switch(action.type){
    case GET_SONG_HOME_PAGE:
      return{
        ...state,
        musicHome: action.payload,
      }
      default:
        return state
  }
}
export default songHomepageReducer