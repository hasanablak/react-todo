import { useNavigate, useLocation  } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios";
import { ModifidedSwal } from "../helpers/modifided-swal";
import Header from "../components/header";

export default function UpdateUser() {

	const [credenditinal, setCredentinal] = useState({name:"", email:"", password:""});
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setCredentinal(location.state.user);
	}, [location])

	
	
	const sendUpdateForm = async (e) => {
		e.preventDefault();

		await axios.put(process.env.REACT_APP_API_URL + "/users/"+credenditinal.id, credenditinal)
			.then((e) => {
				updateWasSuccessfully(e.data.user)
			});

	}

	const updateWasSuccessfully = async ()  => {

		ModifidedSwal().fire({
			icon: "success",
			title: "User was updated",
			confirmButtonText: "Do you want to go to the user's panel?"
		}).then(() => {
			navigate(`/users/${credenditinal.id}`, {
				state: {
					user: credenditinal
				}
			});
		})
	}

	return (
		<div className="col-md-10 " style={{borderRight:"1px dashed #000"}} >
			<Header title="Update user" checkbox={false} />
				<div className="row">
					<div className="col" >
						<div className="d-flex  justify-content-center align-items-center mx-3 my-3">
							<div className="d-flex p-5 ">
								<div className="d-flex justify-content-center align-items-center p-3 w-100">
									<form className="d-flex mb-4 flex-column" onSubmit={sendUpdateForm}>
										<div className="form-outline flex-fill">
											<label className="form-label" htmlFor="name">Full name</label>
											<input
												value={credenditinal.name}
												required
												type="text"
												id="name"
												onChange={(v) => setCredentinal(f => ({ ...f, name: v.target.value }))}
												className="form-control form-control-lg" />
										</div>
										<div className="form-outline flex-fill mt-3">
											<label className="form-label" htmlFor="email">E-mail</label>
											<input
												value={credenditinal.email}
												required 
												pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
												type="text"
												id="email"
												checked={credenditinal.is_admin === 1}
												onChange={(v) => setCredentinal(f => ({ ...f, email: v.target.value }))}
												className="form-control form-control-lg" />
										</div>
										<div className="form-outline flex-fill mt-3">
											<label className="form-label mx-1" htmlFor="is_admin_yes">Is Admin:</label>
											<label className="form-label" htmlFor="is_admin_yes">Yes 
												<input
														required
														type="radio"
														name="is_admin"
														id="is_admin_yes"
														checked={credenditinal.is_admin == 1}
														onChange={(v) => setCredentinal(f => ({ ...f, is_admin: 1 }))}
														className="mx-1" />
											</label>
											<label className="form-label mx-3" htmlFor="is_admin_no">No 
												<input
														required
														type="radio"
														name="is_admin"
														id="is_admin_no"
														checked={credenditinal.is_admin == 0}
														onChange={(v) => setCredentinal(f => ({ ...f, is_admin: 0 }))}
														className="mx-1" />
											</label>
										</div>
										<div className="form-outline flex-fill my-3 mt-3">
											<input
											type="submit"
											className="form-control form-control-md"
											value="Update user" />
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