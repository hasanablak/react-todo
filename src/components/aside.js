import {AddUser ,Close, Pluse, Search, Trash } from "../assets/icons"
export default function Aside() {
	return (
			<>
				<div className="card">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-8 align-items-end flex-column">
							<span className="px-1">Hasan ABLAK</span>
						</div>
						<div className="col-4">
							<button className="btn btn-outline-primary"><Close/></button>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col">
						<button className="btn btn-outline-primary">
							<AddUser/>
						</button>
						<button className="btn btn-outline-primary">
							<Pluse/>
						</button>
						<button className="btn btn-outline-primary">
							<Search/>
						</button>
						<button className="btn btn-outline-primary">
							<Trash/>
						</button>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 col-sm-12">
						<div className="card">
							<input type="text" className="form-control" placeholder="Search User"/>
						</div>
					</div>
					<div className="col-12 col-sm-12 mt-3">
						<div className="card">
							<div className="row d-flex justify-content-center align-items-center">
								<div className="col d-flex align-items-end flex-column">
									<span>Hasan ABLAK</span>
								</div>
								<div className="col-3 d-flex">
									<button className="btn btn-outline-primary">></button>
								</div>
							</div>
						</div>
					</div>
			</div>
		</>
	)
}