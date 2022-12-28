import { Uncheck, Check, Edit } from "../assets/icons"

export default function Header({ children, name }) {

	return (
		<div className="row py-2 " style={{borderBottom:"1px dashed #000"}}>
				<div className="col-md-5">
					<h6>
					Dashboard {name && 
						<> - <b> {name} </b>
							<button className="mx-1 btn btn-outline-primary">
								<Edit/>
							</button>
						</>}
					</h6>
				</div>
				<div className="col-md-2 offset-md-5">
					<button className="btn btn-outline-primary mx-1"><Check/></button>
					<button className="btn btn-outline-primary"><Uncheck/></button>
				</div>
			</div>
	)
}