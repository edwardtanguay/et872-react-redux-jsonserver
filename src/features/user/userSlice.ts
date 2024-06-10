/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../shared/types";

export type State = {
	users: User[];
	status: "loading" | "completed" | "error";
};

const usersUrl = "http://localhost:4205/users";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
	const response = await axios.get(usersUrl);
	return response.data;
});

const initialState: State = {
	users: [],
	status: "loading"
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.status = "completed";
				state.users = action.payload;
			});
	},
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;
