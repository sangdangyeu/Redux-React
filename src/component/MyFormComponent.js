import React, { useState } from "react";
const MyFormComponent = (props) => {

    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    // const [subMit, setsubMit] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleSalary = (event) => {
        setSalary(event.target.value);
    };
    const handleSubMit = (event) => {
        event.preventDefault();
        // setsubMit(`${title} - ${salary} $`);
        setTitle("");
        setSalary("");
        // console.log({ title, salary })
        props.addSalary({
            id: Math.floor((Math.random() * 100) + 1),
            title: title,
            salary: salary,
        })

    };
    return (
        <>
            <form >
                <label>Title: {title}</label><br />
                <input
                    type="text"
                    value={title}
                    onChange={(event) => handleTitle(event)}
                />
                <br />
                <label>Salary: {salary}</label><br />
                <input type="text"
                    value={salary}
                    onChange={(event) => handleSalary(event)}
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => handleSubMit(event)}
                />
            </form >
            <div>
                {/* <p>{subMit}</p> */}
                {/* {console.log({ subMit })} */}

            </div>
        </>
    )
}
export default MyFormComponent;