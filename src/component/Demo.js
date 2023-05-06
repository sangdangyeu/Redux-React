import React from "react";

class Demo extends React.Component {
    render() {
        const { ListUser } = this.props;
        return (
            <div>
                {ListUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>Tên: {user.name}</div>
                            <div>Tuổi: {user.age}</div>
                        </div>
                    )

                })}
            </div>
        );
    }
}
export default Demo;