import { createSlice } from	'@reduxjs/toolkit'
import axios from "axios"
export const authSlice = createSlice({
	name:	'auth',
	initialState:	{
		token:  localStorage.getItem("token") ? axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") : "",
		user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
	},
	reducers:	{
		setAuth: (state, {payload: payload}) => {
			if (payload) {
				let token = payload.token_type+" "+payload.token;
				state.token = token;
				state.user = payload.user;
				axios.defaults.headers.common['Authorization'] = token;
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(payload.user));
			} else {
				state.token = "";
				state.user = {};
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				axios.defaults.headers.common['Authorization'] = "";
			}
		}
	},
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer