import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.onUserChange = this.onUserChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.state = {
            id: null,
            user_name: '',
            password: '',
            message: ''
        };
    }

    onUserChange(e) {
        this.setState({user_name: e.target.value})
    }

    onPassChange(e) {
        this.setState({password: e.target.value})
    }

    loginUser(e) {
        let login_info = [];
        fetch(`http://localhost:8080/api/login?email=${this.state.user_name}&pass=${this.state.password}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            login_info = data.map((resp) => {
                return resp
            });
            if(login_info.length == 1 && login_info[0].message){
                this.setState({
                    password:'', 
                    user_name:'',
                    message: login_info[0].message
                });
            } else {
                this.setState({id: login_info[0].id});
                this.props.setId(login_info[0].id);
            }
        })
        .catch((error) => {
            console.error('error in execution', error);
            this.setState({password:'', user_name:''});
        });
    }

    render () {
        return(
            <div className="login-wrapper">
                <h1>Login</h1>
                <label>
                    <p>Username: <input type="text" onChange={this.onUserChange} value={this.state.user_name} /></p>
                </label>    
                <label>
                    <p>Password: <input type="password" onChange={this.onPassChange} value={this.state.password}/></p>
                </label>
                <div>
                    <button onClick={this.loginUser}>Submit</button>
                </div>
                <div>
                    {this.state.message}
                </div>
            </div>
        )
    }
}

export default Login;