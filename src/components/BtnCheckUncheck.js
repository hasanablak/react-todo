import { Check, Uncheck } from "../assets/icons"

export default function BtnCheckUncheck(props) {
	return (<button {...props} className="d-flex btn btn-outline-primary">
					{props.status ? <Check/> : <Uncheck/>}
			</button>)
}