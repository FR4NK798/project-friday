import { configureStore, combineReducers } from '@reduxjs/toolkit'
import songHomepageReducer from '../reducers/songHomepageReducer'
import songSearchReducer from '../reducers/songSearchReducer'

const unifiedReducer = combineReducers({
    home: songHomepageReducer, 
    search: songSearchReducer, 

  })

  const store = configureStore({
    reducer: unifiedReducer, 
  })
  
  export default store