import { combineReducers } from 'redux'
import { jogsReducer } from './jogs/jogs.reducer'
import { userReducer } from './users/user.reducer'
import { filtersReducer } from './filters/filters.reducer'

export const rootReducer = combineReducers({
	jogs: jogsReducer,
	user: userReducer,
	filters: filtersReducer,
})
