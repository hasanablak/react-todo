import { useDispatch } from "react-redux"
import { Close } from "../assets/icons";
import { setAuth } from "../stores/auth";
import { ModifidedSwal } from "../helpers/modifided-swal";
import { useNavigate } from "react-router-dom";
export default function LogoutUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logout = async () => {

		const { value: answer } = await ModifidedSwal().fire({
			icon: "question",
			title: "Are you sure?",
			text: "Are you sure you want to sign out?",
			showCancelButton: true,
			confirmButtonText: "Yes"
		})

		if (answer) {
			await dispatch(setAuth(""));
			navigate("/");
		}

		

		
	}

	return (<button className="btn btn-outline-primary" onClick={logout}><Close/></button>)
}