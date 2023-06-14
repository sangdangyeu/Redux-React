import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Homes = (props) => {
    const { dataRedux, handleDelete, } = props;

    // useEffect(() => {
    //     setTimeout(() => {
    //         history.push("/Todos");
    //     }, 3000);
    // }, [history]);

    const handleDeleteUser = (user) => {
        console.log(user);
    };

    return (
        <div>
            {dataRedux && dataRedux.length > 0 ? (
                dataRedux.map((item, index) => (
                    <div key={item.id}>
                        {index + 1} - {item.name}{" "}
                        <span onClick={() => handleDeleteUser(item)}>X</span>
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (userId) => dispatch({ type: "DELETE_USER", payload: userId }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homes));
