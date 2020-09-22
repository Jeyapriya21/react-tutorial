import React from 'react';

class ConfidentialInfo extends React.Component {
    state = {
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

    render() {
        return (
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
    }
}

export default ConfidentialInfo;
