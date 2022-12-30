import { configureStore	} from '@reduxjs/toolkit'
import authReducer from './auth'
import fetchReducer from './fetch'

export default configureStore({
	reducer: {
		auth: authReducer,
		fetch: fetchReducer
	},
})