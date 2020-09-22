import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConfidentialInfo from './ConfidentialInfo';

class App extends React.Component {

    state = {
        username: 'coucou@gmail.com',
        password: 'poooo',
        isConnected: false
    }

    handleConnect = () => {
        let peutSeConnecter = false;
        if (this.state.username == 'hello@lo.com' && this.state.password == 'blabla') {
            peutSeConnecter = true;
        }
        this.setState({
            isConnected: peutSeConnecter
        });
    }

    handleDisconnect = () => {
        this.setState({
            isConnected: false
        });
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

    render() {

        let blockBoutonDeConnexion = (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername} /><br />
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} /><br/>
                <button onClick={this.handleConnect}>Se connecter</button>
            </div>
        );
        // if (this.state.isConnected == true) { 
        if (this.state.isConnected) {
            blockBoutonDeConnexion = null;
        }

        let blockBoutonDeDeconnexion = (<button onClick={this.handleDisconnect}>Se déconnecter</button>);
        // if (this.state.isConnected == false) {
        if (!this.state.isConnected) {
            blockBoutonDeDeconnexion = null;
        }

        let blockInformation = (
            <ConfidentialInfo />
        );
        // if (this.state.isConnected == false) {
        if (!this.state.isConnected) {
            blockInformation = null;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Bienvenue !</p>
                    {blockBoutonDeConnexion}
                    {blockBoutonDeDeconnexion}
                    {blockInformation}
                </header>
            </div>
        );
    }
}

export default App;
