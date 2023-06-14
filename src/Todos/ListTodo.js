import React, { useState } from "react";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";

const ListTudo = () => {
    const [listTodo, setListTodo] = useState([
        { id: '1', title: 'siêu nhân đỏ' },
        { id: '2', title: 'siêu nhân xanh' },
        { id: '3', title: 'siêu nhân hồng' }
    ]);

    // chua hỉu lắm
    // const [newList, setNewList] = useState({})
    // const editTodo = (todo) => {
    //     setNewList(todo)
    // };
    // chua hỉu lắm


    const addJob = (job) => {
        setListTodo([job, ...listTodo]);

    };
    const deleteTodo = (job) => {
        let deleteTodo = listTodo;
        deleteTodo = deleteTodo.filter((item) => item.id !== job);
        setListTodo(deleteTodo);
    };


    return (
        <>
            <AddTodo
                addJob={addJob}
            />
            <DeleteTodo
                deleteTodo={deleteTodo}
                listTodo={listTodo}

            // editTodo={editTodo}
            // newList={newList}
            />
        </>


    )
}
export default ListTudo;