import React, { useState } from "react";
import './AddTodo.scss'
import { toast } from 'react-toastify';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleNew = (event) => {
        if (!title) {
            toast.error("Bạn hãy nhập thông tin!");
            return;
        }
        setTitle("");
        props.addJob({
            id: Math.floor((Math.random() * 100) + 1),
            title: title,
        });
        toast.success("Bạn đã thêm thành công!");


    };

    return (
        <>
            <div className="list-todo-container">
                <div className="add-todo">
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => handleTitle(event)}
                    />
                    <button
                        className="button"
                        type="button"
                        onClick={(event) => handleNew(event)}> ADD
                    </button>
                </div>
            </div>
        </>
    )
}
export default AddTodo;