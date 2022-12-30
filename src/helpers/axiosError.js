import axios from "axios";
import { useEffect } from "react";
import { ModifidedSwal } from "./modifided-swal";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../stores/auth"
import { useNavigate } from "react-router-dom";
export function AxiosError() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {token} = useSelector(state => state.auth);
	
	useEffect(() => {
	
		axios.interceptors.response.use((response) => response, (error) => {
				if (error.response.status === 401) {
					if (token) {
						dispatch(setAuth(""));
						navigate("/")
					}
				} else if (error.response.status === 422) {
					 let errorData = error.response.data.errors;
						let errors = "";

						Object.keys(errorData).forEach(function(errorKey, errorIndex){
							errorData[errorKey].forEach(function (inErrorKey, inErrorIndex) {
								errors+=inErrorKey
							})
						})

					ModifidedSwal()
						.fire({
							icon: "info",
							title: "Validation warning",
							text: errors,
							confirmButtonText: "Okey"
						});
				} else {
					ModifidedSwal()
						.fire({
							icon: "error",
							title: "Anothoer exception",
							text: "Our systems are currently unavailable.",
							confirmButtonText: "Okey"
						});
				}
				
    			return Promise.reject(error);
			});
	}, [])
}