import { Link } from "react-router-dom"
import BtnRestoreTrash from "./BtnRestoreTrash"
import BtnTrash from "./btnTrash";
import BtnCheckUncheck from "./BtnCheckUncheck";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDeleted } from "../stores/fetch";
import BtnEditTodo from "./BtnEditTodo";

export default function TodoItem({ todo }) {
	const dispatch = useDispatch();
	const updateTodo = () => {
		axios.put(`${process.env.REACT_APP_API_URL}/users/${todo.user.id}/todos/${todo.id}`, {
			is_complated: !todo.is_complated
		})
		.then((e) => {
			dispatch(setDeleted())
		});
	}

	const removeTodo = () => {
		axios.delete(`${process.env.REACT_APP_API_URL}/users/${todo.user.id}/todos/${todo.id}`)
		.then((e) => {
			dispatch(setDeleted())
		});
	}

	const restoreTodo = () => {
		axios.post(`${process.env.REACT_APP_API_URL}/users/${todo.user.id}/todos/${todo.id}/restore`)
		.then((e) => {
			dispatch(setDeleted())
		});
	}

	return (
		<div className="card justify-content-center align-items-center p-2 m-3"
			style={{borderRadius:" 15px", border:"1px dashed #000", width:"230px"}}>
			<div className="card-body  w-100 p-0">
				<div className="row">
					<div className={`col  ${todo.is_complated === 1 ? "text-throught" : ""} `}>
						{todo.title}
					</div>
				</div>

				<div className="row my-2">
					<div className="col d-flex justify-content-start">
						<BtnCheckUncheck onClick={updateTodo} status={todo.is_complated} />
						
						{todo.deleted_at ? <BtnRestoreTrash onClick={restoreTodo} /> : <BtnTrash onClick={removeTodo} />}

						<BtnEditTodo todo={todo}/>
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content-end">
						<Link to={"/users/"+todo?.user?.id} state={{user: todo.user}}>{todo?.user?.name}</Link></div>
				</div>
			</div>
		</div>
	)
}


