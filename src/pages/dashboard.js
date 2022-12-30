import Header from "../components/header"
import TodoItem from "../components/todoItem"
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//import Feed from "../components/feed"
export default function Dashboard() {
	
	return (
			<div className="col-md-10 " style={{borderRight:"1px dashed #000"}} >
				<Header/>
				<div className="row" style={{ height: "83vh", overflowY: "scroll", overflowX:"hidden"  }}>
					<div className="col" >
						<Feed></Feed>
					</div>
				</div>
			</div>
	)
}


function Feed() {
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