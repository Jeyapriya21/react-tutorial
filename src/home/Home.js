import React from 'react';
import ConfidentialInfo from '../profile/ConfidentialInfo';
import './Home.css';

class Home extends React.Component {
    state = {
    }

    handleDisconnect = () => {
        this.props.history.push('');
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <ConfidentialInfo /><br />
                    <button onClick={this.handleDisconnect}>Se déconnecter</button>
                </div>
            </div>
        );
    }
}

export default Home;
