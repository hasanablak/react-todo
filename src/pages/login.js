import { Link } from "react-router-dom"
import {useState} from "react"

export default function Login() {

	const [credentinal, setCredentinal] = useState({ email:"", password:""});

	const sendLoginForm = () => {
		
	}

	return (
		<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col col-xl-8">
					<div className="card  justify-content-center align-items-center">
						<div className="card-body p-5">
							<h6 className="mb-3 header">Login</h6>
							<div className="card justify-content-center align-items-center p-3 w-100">
								<form className="d-flex mb-4 flex-column">
									<div className="form-outline flex-fill">
										<label className="form-label" htmlFor="email">E-mail</label>
										<input
											required 
											pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
											type="text"
											id="email"
											onChange={(v) => setCredentinal(f => ({ ...f, email: v }))}
											className="form-control form-control-lg" />
									</div>
									<div className="form-outline flex-fill mt-3">
										<label className="form-label" htmlFor="password">Password</label>
										<input
											required
											type="text"
											id="password"
											onChange={(v) => setCredentinal(f => ({ ...f, password: v }))}
											className="form-control form-control-lg" />
									</div>
									<div className="form-outline flex-fill my-3 mt-3">
										<input
										type="submit"
										className="form-control form-control-md"
										value="Login"
										onClick={sendLoginForm} />
									</div>
									<span>
										<Link to="register">Don't have an account?</Link>
									</span>
								</form>
							</div>

						</div>
					</div>

				</div>
			</div>
	);
}