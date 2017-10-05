import React, {Component} from 'react';
import './App.css';

class App extends Component {
    renderItem(i) {
        return (
            <div>item<strong>{i}</strong></div>
        )
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {this.renderItem(3)}
                {this.renderItem(4)}

            </div>
        );
    }
}

export default App;
