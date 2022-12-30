import { useNavigate } from "react-router-dom"
import axios from "axios";
import { ModifidedSwal } from "../helpers/modifided-swal";
import Header from "../components/header";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
export default function CreateTodo() {

	const [todo, setTodo] = useState({ title: "" });
	const [users, setUsers] = useState([]);
	const [assignUser, setAssignUser] = useState(0);
	const navigate = useNavigate();
	const { user:authUser } = useSelector(state => state.auth);

	useEffect(() => {
		console.log(assignUser);
	}, [assignUser])

	useEffect(() => {
		setAssignUser(authUser.id);
	}, [authUser])


	const sendCreateForm = async (e) => {
		e.preventDefault();

		await axios.post(process.env.REACT_APP_API_URL + "/users/"+assignUser+"/todos",
			todo)
			.then((e) => {
				createWasSuccessfully(e.data)
			});

	}

	const createWasSuccessfully = async (todo)  => {

		const { value: goTo } = await ModifidedSwal().fire({
			icon: "success",
			title: "Todo was created",
			confirmButtonText: "Do you want to go to the assigned User's panel?"
		});
		if (goTo) {
			
			navigate(`/users/${todo.usersQid}`, {
				state: { user: users.find(s => s.id === assignUser) }
			});
		} else {
			setTodo({ title: "" });
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
											value="Create todo" />
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