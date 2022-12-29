import Header from "../components/header"
import TodoItem from "../components/todoItem"

export default function Dashboard() {
	return (
			<div className="col-md-10 " style={{borderRight:"1px dashed #000"}} >
				<Header/>
				<div className="row">
					<div className="col">
						{/* BEGIN: ROW */}
						<div className="row">
							{/* BEGIN: COL */}
							<div className="col-md-4">
								<TodoItem />
							</div>
						{/* BEGIN: COL */}
						</div>
						{/* BEGIN: ROW */}
					</div>
				</div>
			</div>
	)
}