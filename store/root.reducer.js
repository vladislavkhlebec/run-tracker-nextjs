import { combineReducers } from 'redux'
import { jogsReducer } from './jogs/jogs.reducer'
import { userReducer } from './users/user.reducer'

export const rootReducer = combineReducers({
	jogs: jogsReducer,
})
