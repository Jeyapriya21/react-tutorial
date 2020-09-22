import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: 'coucou@gmail.com',
        password: 'poooo'
    }

    handleChangeUsername = (event) => {
        let nouvelleValeur = event.target.value;
        this.setState({
            username: nouvelleValeur
        });
    }

    handleChangePassword = (event) => {
        let nouvelleValeur = event.target.value;
        this.setState({
            password: nouvelleValeur
        });
    }

    // Usage: <input type="text" value={this.state.username} onChange={this.handleChangeInput('username')} /> 
    /*
    handleChangeInput = (name) => (event) => {
        let nouvelleValeur = event.target.value;
        this.setState({
            [name]: nouvelleValeur
        });
    }
    */

    handleConnect = () => {
        if (this.state.username == 'hello@lo.com' && this.state.password == 'blabla') {
            const fonctionDeAppJs = this.props.onConfirm;
            fonctionDeAppJs();
        }
    }

    render() {
        return (
            <div>
                <Link to="/home">Mot de passe oublié ?</Link><br />
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername} /><br />
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} /><br/>
                <button onClick={this.handleConnect}>Se connecter</button>
            </div>
        );
    }
}

export default Login;
