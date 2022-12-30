import { Trash } from "../assets/icons"
import { Uncheck, Check, Edit } from "../assets/icons"
import { useSelector, useDispatch } from "react-redux"
import { setTrashed } from "../stores/fetch";

export default function BtnShowHideTrash() {
	
	const dispatch = useDispatch();
	const fetchParams = useSelector(state => state.fetch);

	return (
		<button className={`btn btn-outline-primary ${fetchParams['only-trashed'] == 1 && "active"}`}
			onClick={() => {
				dispatch(setTrashed(fetchParams['only-trashed'] == 1 ? 0 : 1));
			}}
		>
			<Trash/>
		</button>
	)
}