import { AddUser, Pluse, Search, Trash } from "../assets/icons"

import { useSelector } from "react-redux"
import LogoutUser from "./logoutUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Aside() {
	const { user } = useSelector(state => state.auth);
	const [searchUser, setSearchUser] = useState([]);
	const searchHandle = (e) => {
		if (e.target.value.length >= 3) {
			axios.get(process.env.REACT_APP_API_URL + "/users", {
				params: {
					"search-by-name": e.target.value
				}
			}).then((e) => {
				setSearchUser(e.data);
			})
		} else {
			console.log("3'den büyük yaz")
		}
		
	}

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
				{user.is_admin ? 
				<div className="row mt-3">
					<div className="col-12 col-sm-12">
						<div className="card">
							<input type="text" onChange={searchHandle} className="form-control" placeholder="Search User"/>
						</div>
					</div>
					<div className="col-12 col-sm-12 mt-3">
						{searchUser?.map((user) => (
							<div className="card">
								<div className="row d-flex justify-content-center align-items-center">
									<div className="col d-flex align-items-end flex-column">
										<span>{user.name}</span>
									</div>
									<div className="col-3 d-flex">
										<Link to={`/users/${user.id}`} className="btn btn-outline-primary">></Link>
									</div>
								</div>
							</div>
							))}
					</div>
				</div>
			: ""}
		</>
	)
}