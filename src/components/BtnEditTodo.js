
import { Link } from "react-router-dom"
import { Edit } from "../assets/icons"
export default function BtnEditTodo({todo}) {
	return (<Link to={"/update-todo"} state={{todo}} className="d-flex btn btn-outline-primary">
							<Edit/>
						</Link>)
}