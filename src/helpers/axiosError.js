import axios from "axios";
import { useEffect } from "react";

export function AxiosError() {
	useEffect(() => {
		axios.interceptors.response.use((response) => response, (error) => {
				if (error.response.status === 401) {
					alert("api token geçersiz kullanıcıya çıkışa yönlendir.")
				} else if (error.response.status === 422) {
					 let errorData = error.response.data.errors;
						let errors = "";

						Object.keys(errorData).forEach(function(errorKey, errorIndex){
							errorData[errorKey].forEach(function (inErrorKey, inErrorIndex) {
								errors+=inErrorKey
							})
						})

					alert("validation hatası");
					alert(errors);
				} else {
					alert("başka bir hata! yazılım ekibi ile iletişime geç")
				}
			});
	}, [])
}