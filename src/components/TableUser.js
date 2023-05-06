import React from "react";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect, useStateRe } from 'react';
import { fetchAllUser, deleteUserRedux } from "../redux/action/actions";

const TablerUser = (props) => {

    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    useEffect(() => {
        dispatch(fetchAllUser());
    }, [])
    const handlDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id));
    }
    return (
        <>
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>UserName</th>
                            <th>Actiom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isError === true && <div> lỗi không tìm thấy dữ liệu </div>}
                        {isLoading === true && <div> loading........</div>}
                        {isLoading === false &&
                            <>
                                {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                    return (
                                        <tr key={`users-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>{item.username}</td>
                                            <td>

                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handlDeleteUser(item)}
                                                >Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </>
                        }

                    </tbody>
                </Table>
            </Container >
        </>
    )
}

export default TablerUser;