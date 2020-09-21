import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    state = {
        username: 'coucou@gmail.com',
        isConnected: false,
        name: 'Michael',
        age: 45,
        children: [
            {
                firstname: 'Jean',
                note: 15.5
            },
            {
                firstname: 'Umeo',
                note: 12
            },
            {
                firstname: 'Timea',
                note: 19
            }
        ]
    }

    handleChangeName = () => {
        this.setState({
            name: 'Sandra',
            age: 23,
            children: [
                {
                    firstname: 'Thibo',
                    note: 13
                }
            ]
        });
    }

    handleConnect = () => {
        let peutSeConnecter = false;
        if (this.state.username == 'hello@lo.com') {
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

    render() {

        let blockBoutonDeConnexion = (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                <button onClick={this.handleConnect}>Se connecter</button>
            </div>
        );
        if (this.state.isConnected == true) {
            blockBoutonDeConnexion = null;
        }

        let blockBoutonDeDeconnexion = (<button onClick={this.handleDisconnect}>Se déconnecter</button>);
        if (this.state.isConnected == false) {
            blockBoutonDeDeconnexion = null;
        }

        let blockInformation = (
            <div>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {this.state.name}, j'ai {this.state.age} ans
                </a><br />
                <button onClick={this.handleChangeName}>Changer de nom</button>
                {
                    this.state.children.filter(x => x.note > 10).map(x => (<div>Enfant : {x.firstname}, qui a obtenu {x.note} / 20</div>))
                }
            </div>
        );
        if (this.state.isConnected == false) {
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