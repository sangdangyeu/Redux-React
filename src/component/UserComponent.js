import React, { useEffect, useState } from "react";

// class UserComponent extends React.Component {

// state = {
//     name: "bao sang tran",
//     address: "daklak",
//     age: 28
// }
// handleOnChange = (event) => {
//     this.setState({
//         name: event.target.value
//     })
// }
// handleOnChangeAge = (event) => {
//     this.setState({
//         age: event.target.value
//     })
// }
// handleOnSubmit = (event) => {
//     console.log(this.state);
//     event.preventDefault();
//     this.props.handlAddNewUser(
//         {
//             id: Math.floor((Math.random() * 100) + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age,

//         }
//     );

// }

// render() {
//     return (
//         <div>
//             my Component {this.state.name} My Age{this.state.age}
//             <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                 <label>Your name: </label>
//                 <input type="text"
//                     value={this.state.name}
//                     onChange={(event) => { this.handleOnChange(event) }}
//                 />

//                 <label>Your age: </label>
//                 <input type="text"
//                     value={this.state.age}
//                     onChange={(event) => { this.handleOnChangeAge(event) }}
//                 />
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }
// }

const UserComponent = (props) => {
    const [name, setName] = useState("bao sang tran",);
    const [address, setAddress] = useState("daklak",);
    const [age, setAge] = useState("28");
    const handleOnChange = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)

    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handlAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + "-random",
                name: name,
                age: age,
            }
        );

    }
    return (
        <div>
            my Component {name} My Age{age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input type="text"
                    value={name}
                    onChange={(event) => handleOnChange(event)}
                />

                <label>Your age: </label>
                <input type="text"
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}
export default UserComponent;