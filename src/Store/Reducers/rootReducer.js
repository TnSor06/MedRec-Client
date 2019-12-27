import authReducer from './authReducer'

import { combineReducers } from 'redux'
import { meNavReducer } from './meReducer'
import fetchReducer from './fecthReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    meNav: meNavReducer,
    fetch: fetchReducer
})

export default rootReducer