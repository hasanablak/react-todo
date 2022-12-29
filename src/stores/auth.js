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
				localStorage.setItem("token", payload.token);
				localStorage.setItem("user", JSON.stringify(payload.user));
			} else {
				state.token = "";
				state.user = {};
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			}
		}
	},
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer