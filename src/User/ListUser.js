import React, { useEffect, useState } from "react";
import './ListUser.scss';
import axios from "axios";
import { withRouter } from "react-router";
const ListUser = (props) => {
    const [user, setUesr] = useState([]);


    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                setUesr(res.data.data);
            })
    }, []);
    const handleViewDetail = (user) => {
        props.history.push(`/User/${user.id}`)
    }
    return (
        <>
            <div className="list-user-container">
                {user.map((item, index) => {
                    return (<div key={item.id} className="list-user"
                        onClick={() => handleViewDetail(item)}
                    >
                        {index + 1} - {item.email} - {item.first_name}
                    </div>)
                })}
            </div>
        </>
    )
}
export default withRouter(ListUser);