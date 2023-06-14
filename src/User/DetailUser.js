import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";

const DetailUser = (props) => {
    const [detail, setDetail] = useState({});
    const isEmptyObj = Object.keys(detail).length === 0;
    console.log('check', props);
    useEffect(() => {
        if (props.match && props.match.params) {
            let id = props.match.params.id;
            axios.get(`https://reqres.in/api/users/${id}`)
                .then((res) => {
                    setDetail(res && res.data && res.data.data ? res.data.data : {});
                });
        }
    }, []);
    const handleBackUser = () => {
        props.history.push('/User')
    }
    return (
        <>
            <div> bao sang {detail.id}</div>
            {isEmptyObj === false &&
                <>
                    <div>User's name: {detail.first_name} - {detail.last_name}</div>
                    <div>User's email: {detail.email}</div>

                    <div >
                        <img src={detail.avatar} alt="Avatar"></img>
                    </div>
                    <br />
                    <div>
                        <button type="button" onClick={() => handleBackUser()}>Back</button>
                    </div>
                </>
            }
        </>
    )
}
export default withRouter(DetailUser);
