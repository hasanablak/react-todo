import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Login, Register, Dashboard, UserProfile, CreateTodo, UpdateTodo, CreateUser, UpdateUser } from "../pages"
import { useSelector } from "react-redux";
//import { useSelector } from 'react-redux'
import Layout from "../layouts";
import AuthLayout from "../layouts/authLayout";
export default function Index() {

	return (
		<Layout>
			<Routes>
				<Route path="/" element={
					<NoRequireAuth>
						<Login />
					</NoRequireAuth>
				} />
				<Route path="/register" element={
					<NoRequireAuth>
						<Register />
					</NoRequireAuth>
				} />
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
							<CreateTodo />
						</RequireAdmin>
				} />
				
				<Route path="/create-user" element={
						<RequireAdmin>
							<CreateUser />
						</RequireAdmin>
				} />
				<Route path="/update-user" element={
						<RequireAdmin>
							<UpdateUser />
						</RequireAdmin>
				} />

				<Route path="/create-todo" element={
						<RequireAdmin>
							<CreateTodo />
						</RequireAdmin>
				} />

				<Route path="/update-todo" element={
						<RequireAdmin>
							<UpdateTodo />
						</RequireAdmin>
				} />

			</Routes>
		</Layout>
	)
}
function NoRequireAuth({ children }) {
	const { token } = useSelector(state => state.auth); 
	let location = useLocation();
	
	if (token) {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}
	return children;
}

function RequireAuth({ children }) {
	const { token } = useSelector(state => state.auth); 
	let location = useLocation();
	
	if (!token) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}
	return <AuthLayout>{children}</AuthLayout>;
}

function RequireAdmin({ children }) {
	
	const { user } = useSelector(state => state.auth); 
	let location = useLocation();
	
	if (user.is_admin === 0) {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}
	return <AuthLayout>{children}</AuthLayout>;
}