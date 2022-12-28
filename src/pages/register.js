import { Link } from "react-router-dom"
import {useState} from "react"
import axios from "axios";

export default function Login() {

	const [credenditinal, setCredentinal] = useState({name:"", email:"", password:""});

	const sendRegisterForm = (e) => {
		e.preventDefault();

		axios.post(process.env.REACT_APP_API_URL+"/register", credenditinal)
			.then((e) => {
				console.log(e);
			})
			.catch((e) => {
			console.log(e)
		})
		
	}

	return (
		<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col col-xl-8">
					<div className="card  justify-content-center align-items-center">
						<div className="card-body p-5">
							<h6 className="mb-3 header">Register</h6>
							<div className="card justify-content-center align-items-center p-3 w-100">
								<form className="d-flex mb-4 flex-column" onSubmit={sendRegisterForm}>
									<div className="form-outline flex-fill">
										<label className="form-label" htmlFor="name">Full name</label>
										<input
											 
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
									<div className="form-outline flex-fill my-3 mt-3">
										<input
										type="submit"
										className="form-control form-control-md"
										value="Register" />
									</div>
									<span>
										<Link to="/">Do you have an account?</Link>
									</span>
								</form>
							</div>

						</div>
					</div>

				</div>
			</div>
	);
}