import { useNavigate } from "react-router-dom"
import {useState} from "react"
import axios from "axios";
import { ModifidedSwal } from "../helpers/modifided-swal";
import Header from "../components/header";

export default function CreateUser() {

	const [credenditinal, setCredentinal] = useState({name:"", email:"", password:"", is_admin: 0});
	const navigate = useNavigate();
	const sendRegisterForm = async (e) => {
		e.preventDefault();

		await axios.post(process.env.REACT_APP_API_URL + "/users", credenditinal)
			.then((e) => {
				registerWasSuccessfully(e.data.user)
			});

	}

	const registerWasSuccessfully = async (user)  => {

		const { value: goTo } = await ModifidedSwal().fire({
			icon: "success",
			title: "User was created",
			confirmButtonText: "Do you want to go to the new user's panel?"
		});

		if (goTo) {
			navigate(`/users/${user.id}`, {
				state: {
					user: user
				}
			});
		} else {
			setCredentinal({ name: "", email: "", password: "", is_admin: 0 });
		}
	}

	return (
		<div className="col-md-10 " style={{borderRight:"1px dashed #000"}} >
			<Header title="Create user" checkbox={false} />
				<div className="row">
					<div className="col" >
						<div className="d-flex  justify-content-center align-items-center mx-3 my-3">
							<div className="d-flex p-5 ">
								<div className="d-flex justify-content-center align-items-center p-3 w-100">
									<form className="d-flex mb-4 flex-column" onSubmit={sendRegisterForm}>
										<div className="form-outline flex-fill">
											<label className="form-label" htmlFor="name">Full name</label>
											<input
												required
												type="text"
												id="name"
												onChange={(v) => setCredentinal(f => ({ ...f, name: v.target.value }))}
												className="form-control form-control-lg" />
										</div>
										<div className="form-outline flex-fill mt-3">
											<label className="form-label" htmlFor="email">E-mail</label>
											<input
												required 
												pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
												type="text"
												id="email"
												onChange={(v) => setCredentinal(f => ({ ...f, email: v.target.value }))}
												className="form-control form-control-lg" />
										</div>
										<div className="form-outline flex-fill mt-3">
											<label className="form-label" htmlFor="password">Password</label>
											<input
												required
												type="password"
												id="password"
												onChange={(v) => setCredentinal(f => ({ ...f, password: v.target.value }))}
												className="form-control form-control-lg" />
										</div>
										<div className="form-outline flex-fill mt-3">
											
											<label className="form-label mx-1" htmlFor="is_admin_yes">Is Admin:</label>
											<label className="form-label" htmlFor="is_admin_yes">Yes 
												<input
														required
														type="radio"
														name="is_admin"
														value="1"
														id="is_admin_yes"
														onChange={(v) => setCredentinal(f => ({ ...f, is_admin: v.target.value }))}
														className="mx-1" />
											</label>
											<label className="form-label mx-3" htmlFor="is_admin_no">No 
												<input
														required
														type="radio"
														name="is_admin"
														value="0"
														id="is_admin_no"
														onChange={(v) => setCredentinal(f => ({ ...f, is_admin: v.target.value }))}
														className="mx-1" />
											</label>
										</div>
										<div className="form-outline flex-fill my-3 mt-3">
											<input
											type="submit"
											className="form-control form-control-md"
											value="Create user" />
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