export default function TodoActions() {
	return (
		<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col col-xl-8">
					<div className="card  justify-content-center align-items-center">
						<div className="card-body p-5">
							<h6 className="mb-3 header">Update</h6>
							<div className="card justify-content-center align-items-center p-3 w-100">
								<form className="d-flex mb-4 flex-column">
									<div className="form-outline flex-fill">
										<label className="form-label">Description</label>
										<textarea className="form-control form-control-lg"></textarea>
									</div>
									
									<div className="form-outline flex-fill my-3 mt-3">
										<input type="submit" id="form3" className="form-control form-control-md"
											value="Update" />
									</div>
								</form>
							</div>

						</div>
					</div>

				</div>
			</div>
	);
}