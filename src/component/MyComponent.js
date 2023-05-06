import React, { useState } from "react";
import UserComponent from "./UserComponent";
import DisplayInfor from "./DisplayInfor";
import AddInfor from "./AddInfor";


const MyComponent = () => {
    const [listUser, setListUser] = useState([{
        id: 1,
        name: "xuan bac",
        age: "16",
    },
    {
        id: 2,
        name: "xuan truong",
        age: "26",
    },
    {
        id: 3,
        name: "xuan ho",
        age: "69",
    }

    ])
    const handlAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])
    }

    const handlDelete = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone)
    }


    return (
        <div>
            <UserComponent
                handlAddNewUser={handlAddNewUser}
            />
            <br /><br />
            <DisplayInfor
                listUser={listUser}
                handlDelete={handlDelete}
            />
            <AddInfor
                listUser={listUser}
                handlAddNewUser={handlAddNewUser}
            />
        </div>
    );


}
export default MyComponent;
