import {Link} from "react-router-dom"
export default function Register() {
	return (
		<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col col-xl-8">
					<div className="card  justify-content-center align-items-center">
						<div className="card-body p-5">
							<h6 className="mb-3 header">Register</h6>
							<div className="card justify-content-center align-items-center p-3 w-100">
								<form className="d-flex mb-4 flex-column">
									<div className="form-outline flex-fill">
										<label className="form-label">E-mail</label>
										<input type="text" id="form3" className="form-control form-control-lg" />
									</div>
									<div className="form-outline flex-fill mt-3">
										<label className="form-label">Name</label>
										<input type="text" id="form3" className="form-control form-control-lg" />
									</div>
									<div className="form-outline flex-fill mt-3">
										<label className="form-label">Password</label>
										<input type="password" id="form3" className="form-control form-control-lg" />
									</div>
									<div className="form-outline flex-fill my-3 mt-3">
										<input type="submit" id="form3" className="form-control form-control-md"
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