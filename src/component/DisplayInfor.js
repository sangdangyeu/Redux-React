import React, { useState, useEffect } from "react";
import Demo from "./Demo";

const DisplayInfor = (props) => {
	const { listUser } = props;
	const [showListUser, setListUser] = useState(true);
	const handleShowListUser = () => {
		setListUser(!showListUser);
	}


	useEffect(
		() => {
			if (listUser.length === 0) { alert("Bạn đã xóa hết list") }
		}, [listUser]
	);
	return (
		<div className="body_container">
			<div>
				<span onClick={() => handleShowListUser()}>
					{showListUser === true ? "Show List Uset" : "Hidden List User"}
				</span>
			</div>
			{showListUser &&
				<>
					{listUser.map((user) => {
						return (
							<div key={user.id} className={+user.age > 18 ? "red" : "blue"}>
								<div>
									<div>My name: {user.name}</div>
									<div>My age: {user.age}</div>
								</div>


								<div>
									<button onClick={() => props.handlDelete(user.id)}>Delete</button>
								</div>
								<hr />

							</div>

						)
					})}
					{/* <Demo ListUser={this.props.ListUser} /> */}
				</>
			}
		</div>
	);
}
export default DisplayInfor;