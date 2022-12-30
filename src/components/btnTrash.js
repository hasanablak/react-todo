import { Trash } from "../assets/icons"
export default function BtnTrash(props) {
	return (<button {...props} className="d-flex btn btn-outline-primary">
							<Trash/>
			</button>)
}