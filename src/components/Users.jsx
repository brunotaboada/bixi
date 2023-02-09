import React from 'react';
import { withRouter } from '../common/with-router';

class User extends React.Component {
    constructor() {
        super();
        this.onChangeUser = this.onChangeUser.bind(this);
    }

    onChangeUser(e) {
        this.props.state.user_id = e.target.value;
    }

    render () {
        let users = this.props.state.users;
        let optionItems = users.map((user) =>
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        );

        return (
         <div>
             Bikes:&nbsp; 
             <select onChange={this.onChangeUser}>
                {optionItems}
             </select>
             <br/>
         </div>
        )
    }
}

export default withRouter(User);