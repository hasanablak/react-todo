import { Uncheck, Check, Edit } from "../assets/icons"
import { useSelector, useDispatch } from "react-redux"
import { setStatus } from "../stores/fetch"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Header({title = "Dashboard", checkbox = true }) {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);
	const fetchParams = useSelector(state => state.fetch);
	const location = useLocation();
	const [locationUser, setLocationUser] = useState({});
	useEffect(() => {
		setLocationUser(location?.state?.user)
		console.log(location)
	},[location])
	return (
		<div className="row py-2 " style={{borderBottom:"1px dashed #000"}}>
				<div className="col-md-5">
				<h6>
					<Link to={"/dashboard"}>{title}</Link>
					 {(locationUser?.name && user.is_admin == 1) &&
						<> - <b> {locationUser?.name} </b>
							<Link className="mx-1 btn btn-outline-primary" to={"/update-user"} state={{user:locationUser}}>
								<Edit/>
							</Link>
						</>}
					</h6>
				</div>
				{checkbox ? 
				<div className="col-md-2 offset-md-5">
				<button className={`btn btn-outline-primary mx-1 ${fetchParams.status == "1" && "active"}`}
					onClick={() => {
						dispatch(setStatus(fetchParams.status == 1 ? null : "1"));
					}}>
					<Check />
				</button>
				<button className={`btn btn-outline-primary mx-1 ${fetchParams.status == "0" && "active"}`}
					onClick={() => {
						dispatch(setStatus(fetchParams.status == "0" ? null : "0"));
					}}>
					<Uncheck />
				</button>
				</div>
				: ""
				}
			</div>
	)
}