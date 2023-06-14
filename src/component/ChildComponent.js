import React, { useState } from "react";
const ChildComponent = (props) => {
    const { list } = props;
    const [showList, setShowList] = useState(true);

    const handleShow = () => {
        setShowList(!showList);
    }
    const handleOnClickDelete = (job) => {
        props.deleteId(job)
    }
    return (
        <>
            <div>
                {showList && list.map((item) => (
                    <div key={item.id}>
                        {item.title} - {item.salary} <></> <span onClick={() => handleOnClickDelete(item.id)}><i className="fa-regular fa-trash-can"></i></span>
                    </div>
                ))}
            </div>

            <br />

            <div>
                <button onClick={handleShow}>Show</button>
            </div>
        </>
    );
};

export default ChildComponent;
