import { AxiosError } from "../helpers/axiosError"
export default function Layout({ children }) {
	AxiosError();
	return (
		<section className="vh-100">
			<div className="container py-5 h-100">
				{children}
			</div>
		</section>
	)
}