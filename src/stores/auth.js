import { createSlice } from	'@reduxjs/toolkit'

export const authSlice = createSlice({
	name:	'auth',
	initialState:	{
		token: "",
		user: {}
	},
	reducers:	{
		setAuth: (state, {payload: payload}) => {
			if (payload) {
				state.token = payload.token;
				state.user = payload.user;
				sessionStorage.setItem("token", payload.token);
				sessionStorage.setItem("user", JSON.stringify(payload.user));
			} else {
				state.token = "";
				state.user = {};
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("user");
			}
		}
	},
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer