import { Link } from "react-router-dom"
import { AddUser } from "../assets/icons"

export default function BtnCreateUser() {
	return (
		<Link className="btn btn-outline-primary" to={"/create-user"}>
			<AddUser/>
		</Link>
	)
}