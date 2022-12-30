import { createSlice } from '@reduxjs/toolkit'

export const fetchSlice = createSlice({
	name:	'counter',
	initialState:	{
		"only-trashed": "0",
		"status": null,
		"deleted": false
	},
	reducers:	{
		setTrashed: (state, {payload: payload}) => {
			state['only-trashed'] = payload;
		},
		setStatus: (state, { payload: payload }) => {
			state.status = payload;
		},
		setDeleted: (state) => {
			state.deleted = !state.deleted
		}
	},
})

// Action creators are generated for each case reducer function
export const { setTrashed, setStatus, setDeleted } = fetchSlice.actions

export default fetchSlice.reducer