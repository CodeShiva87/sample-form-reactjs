import React from "react";

export default class MyComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernames : []
        };
    }

    async componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(json => this.setState({ usernames: json }));

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const json = await response.json();
        this.setState({ usernames: json });
    }


    render() {
        return(
            <div>
                Hey guys!
                <ul>
                {this.state.usernames.map(user => (
                    <li key={user.username}>
                    Hello, {user.username}
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}