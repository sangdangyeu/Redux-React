import React, { useState } from "react";
import './DeleteTodo.scss';
import { toast } from 'react-toastify';

const DeleteTodo = (props) => {
	const { listTodo, newList } = props;

	const [editTodo, setEditTodo] = useState({});
	const [showList, setShowList] = useState(true);
	const handleShow = () => {
		setShowList(!showList);
	}
	const handleDelete = (job) => {
		props.deleteTodo(job)
		toast.warning("Bạn đã xóa thành công!");
	}


	const isEmptyObj = Object.keys(editTodo).length === 0;
	console.log(isEmptyObj);


	// chua hỉu lắm
	const handleEditTodo = (todo) => {
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let copyList = [...listTodo];
			let objIndex = copyList.findIndex((item => item.id === todo.id));
			copyList[objIndex].title = editTodo.title
			setEditTodo(copyList);
			toast.success("Bạn đã thêm thành công!");
			return;
		}
		setEditTodo(todo);
	}

	// chua hỉu lắm
	const handleTitleTodo = (e) => {
		setEditTodo({ ...editTodo, title: e.target.value });

	};
	// chua hỉu lắm

	return (
		<>
			<div className="list-todo-content">
				{showList && listTodo.map((item, index) => {
					return (
						<div key={item.id} className="todo-child">
							{isEmptyObj === true ?
								<span>{index + 1} - {item.title}</span>
								:
								<>
									{editTodo.id === item.id ?
										<span>
											{index + 1} - <input
												onChange={(e) => handleTitleTodo(e)}
												value={editTodo.title}
											/>
										</span>
										:
										<span>
											{index + 1} - {item.title}
										</span>
									}
								</>
							}
							<span className="fa-regular"
								onClick={() => handleEditTodo(item)}
							>
								{isEmptyObj === false && editTodo.id === item.id ?
									<i className="fa-solid fa-check"></i>
									:

									<i className="fa-regular fa-plus"></i>
								}
							</span>
							<span
								onClick={() => handleDelete(item.id)}
								className="fa-regular">
								<i className="fa-regular fa-trash-can"></i>
							</span>
						</div>
					)
				}
				)}
				<span></span>
			</div >
			<br />
			<div>
				<button type="button" onClick={() => handleShow()}>Show</button>
			</div>
		</>
	)
}
export default DeleteTodo;