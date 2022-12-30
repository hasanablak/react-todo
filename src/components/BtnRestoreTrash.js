import { RestoreTrash as RestoreTrashIcon } from "../assets/icons";
export default function BtnRestoreTrash(props) {
	return ( 
		<button {...props} className="d-flex btn btn-outline-primary">
			<RestoreTrashIcon />
		</button>
	);
}