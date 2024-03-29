import {GET_SONG_SEARCH} from '../actions'


const initialState = {
    musicSearch: [], // qui dentro andranno a finire i libri recuperati dalla fetch a /food-books
  }
  
const songSearchReducer =(state=initialState, action)=>{
  switch(action.type){
    case GET_SONG_SEARCH:
      return{
        ...state,
        musicSearch: action.payload,
      }
      default:
        return state
  }
}
export default songSearchReducer