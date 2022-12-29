
import Aside from "../components/aside";
export default function AuthLayout({ children }) {
	return (
		<div className="row d-flex h-100"  style={{border: "1px dashed #000"}}>
					{children}
					
			<div className="col">
				<Aside/>
			</div>
		</div>
	)
}