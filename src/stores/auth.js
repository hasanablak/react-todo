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
				state.token = payload.token;
				state.user = payload.user;
				localStorage.setItem("token", payload.token);
				localStorage.setItem("user", JSON.stringify(payload.user));
				axios.defaults.headers.common['Authorization'] = payload.token;
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