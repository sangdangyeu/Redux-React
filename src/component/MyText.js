import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import MyFormComponent from "./MyFormComponent";
const MyText = () => {
    const [list, setList] = useState([
        { id: "1", title: "Siêu Nhân", salary: "1" },
        { id: "2", title: "Siêu Hồng", salary: "12" },
        { id: "3", title: "Siêu Xanh", salary: "13" },
    ]);

    const addSalary = (job) => {
        setList([job, ...list]);
    }

    const deleteId = (job) => {
        let deleteList = list;
        deleteList = deleteList.filter(item => item.id !== job);
        setList(deleteList);
    }

    return (
        <>
            <MyFormComponent
                addSalary={addSalary}
            />
            <ChildComponent
                list={list}
                deleteId={deleteId}
            />

        </>
    )
}
export default MyText;