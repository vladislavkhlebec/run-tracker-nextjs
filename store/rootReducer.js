import { combineReducers } from 'redux'
import { jogsReducer } from './jogs/jogsReducer'

export const rootReducer = combineReducers({
	jogs: jogsReducer,
})
