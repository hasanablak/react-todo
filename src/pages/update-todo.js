import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios";
import { ModifidedSwal } from "../helpers/modifided-swal";
import Header from "../components/header";
import { useEffect, useState } from "react";

export default function UpdateTodo() {

	const location = useLocation();
	const [todo, setTodo] = useState({ title: "" });
	const [users, setUsers] = useState([]);
	const [assignUser, setAssignUser] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(assignUser);
	}, [assignUser])

	useEffect(() => {
		console.log(location)
		setAssignUser(location?.state?.todo?.user?.id);
		setTodo({title: location?.state?.todo?.title })
	}, [location])


	const sendCreateForm = async (e) => {
		e.preventDefault();

		await axios.put(process.env.REACT_APP_API_URL + "/users/"+assignUser+"/todos/"+location?.state?.todo?.id,
			todo)
			.then((e) => {
				updateWasSuccessfully()
			});

	}

	const updateWasSuccessfully = async ()  => {

		const { value: goTo } = await ModifidedSwal().fire({
			icon: "success",
			title: "Todo was updated",
			confirmButtonText: "Do you want to go to the assigned User's panel?"
		});
		if (goTo) {
			
			navigate(`/users/${assignUser}`, {
				state: {
					user:
						users.find(s => s.id === assignUser)
				}
			});
			
		}
	}

	const fetchAllUser = () => {
		axios.get(process.env.REACT_APP_API_URL + "/users")
			.then((e) => {
				setUsers(e.data);
			});
	}

	useEffect(() => {
		fetchAllUser();
	}, []);

	return (
		<div className="col-md-10 " style={{borderRight:"1px dashed #000"}} >
			<Header title="Create todo" checkbox={false} />
				<div className="row">
					<div className="col" >
						<div className="d-flex  justify-content-center align-items-center mx-3 my-3">
							<div className="d-flex p-5 ">
								<div className="d-flex justify-content-center align-items-center p-3 w-100">
									<form className="d-flex mb-4 flex-column" onSubmit={sendCreateForm}>
										<div className="form-outline flex-fill">
											<label className="form-label" htmlFor="todo">Todo</label>
											<textarea
												value={todo.title}
												required
												type="text"
												id="todo"
												onChange={(v) => setTodo(f => ({ ...f, title: v.target.value }))}
												className="form-control form-control-lg" />
										</div>
										<div className="form-outline flex-fill mt-3">
											<label className="form-label" htmlFor="email">Assign to User</label>
												<select value={assignUser} onChange={(v) => setAssignUser(v.target.value)} className="form-control form-control-lg">
												{users?.map((user, index) => (
													<option key={index} value={user.id}>{user.name}</option>
												))}
											</select>
										</div>
										<div className="form-outline flex-fill my-3 mt-3">
											<input
											type="submit"
											className="form-control form-control-md"
											value="Update todo" />
										</div>
									</form>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
	);
}