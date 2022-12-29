import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import {Login, Register, Dashboard, UserProfile, TodoActions} from "../pages"
//import { useSelector } from 'react-redux'
import Layout from "../layouts";
import AuthLayout from "../layouts/authLayout";
export default function Index() {

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
				} />
				<Route path="/users/:user" element={
						<RequireAdmin>
							<UserProfile />
						</RequireAdmin>
				} />
				<Route path="/users/:user/todo/:todo" element={
						<RequireAdmin>
							<TodoActions />
						</RequireAdmin>
				} />
			</Routes>
		</Layout>
	)
}

function RequireAuth({ children }) {
	let auth = true;
	let location = useLocation();
	/*
	if (!auth) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}
	*/
	return <AuthLayout>{children}</AuthLayout>;
}

function RequireAdmin({ children }) {
	let admin = true;
	let location = useLocation();
	/*
	if (!admin) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}
	*/
	return children;
}