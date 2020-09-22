import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConfidentialInfo from './ConfidentialInfo';
import Login from './Login';

class App extends React.Component {

    state = {
        isConnected: false
    }

    handleDisconnect = () => {
        this.setState({
            isConnected: false
        });
    }

    handleConfirmLogin = () => {
        this.setState({
            isConnected: true
        });
    }

    render() {
        let blockBoutonDeConnexion = (
            <Login onConfirm={this.handleConfirmLogin} />
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
