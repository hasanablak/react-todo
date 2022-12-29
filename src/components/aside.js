import { AddUser, Pluse, Search, Trash } from "../assets/icons"

import { useSelector } from "react-redux"
import LogoutUser from "./logoutUser";
export default function Aside() {
	const { user } = useSelector(state => state.auth);
	return (
			<>
				<div className="card">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-8 align-items-end flex-column">
							<span className="px-1">{user.name}</span>
						</div>
						<div className="col-4">
							<LogoutUser/>
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