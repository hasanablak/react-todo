import { Pluse } from "../assets/icons"
import { Link } from "react-router-dom"
export default function BtnAddTodo() {
	return (<Link to="/create-todo" className="btn btn-outline-primary">
							<Pluse/>
						</Link>)
}