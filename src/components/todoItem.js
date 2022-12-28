import { Check, Uncheck, Trash, Edit } from "../assets/icons"
export default function TodoItem() {
	return (
		<div className="card justify-content-center align-items-center p-2 m-3"
			style={{borderRadius:" 15px", border:"1px dashed #000", width:"250px"}}>
			<div className="card-body  w-100 p-0">
				<div className="row">
					<div className="col">
						Falan Filan
					</div>
				</div>

				<div className="row">
					<div className="col d-flex justify-content-start">
						<button className="d-flex btn btn-outline-primary">
							<Check/>
						</button>
						
						<button className="d-flex btn btn-outline-primary">
							<Trash/>
						</button>

						<button className="d-flex btn btn-outline-primary">
							<Edit/>
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content-end">Hasan Ablak</div>
					
				</div>
			</div>
		</div>
	)
}