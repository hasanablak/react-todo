
import TodoItem from "./todoItem"
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Feed() {
	const bolen = 4;
	const [rowCount, setRowCount] = useState([]);
	const [data, setData] = useState([]);
	const fetchParams = useSelector((state) => state.fetch);

	const fetchHome = (fetchParams) => {
		//axios.get(process.env.REACT_APP_API_URL + "/users/1/todos", {
		axios.get(process.env.REACT_APP_API_URL + "/home-feed", {
			params: fetchParams
		})
			.then((e) => {
				let bolum = Math.ceil(e.data.length / bolen);
				setRowCount(Array.from(Array(bolum).keys()));
				setData(e.data);
			})
	}

	useEffect(() => {
		fetchHome(fetchParams);
	}, [fetchParams]);


	return (rowCount?.map((i) =>  (
				<div className="row" key={i}>
				
					{data.slice(i*bolen, (i+1) *bolen).map((todo, indis) => {
						return (<div className="col-md-3" key={indis}>
								<TodoItem todo={todo} />
							</div>)
						})}
				
				</div>
			)
		))
}