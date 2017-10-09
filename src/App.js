import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 42,
            todos: ['bye milk', 'make dinner', 'study react'],
            curItem: 'outofcontent',
        };
    }

    revalue = () => this.setState({value: this.state.value + 1});
    addItem = () => {
        if (!this.state.curItem) return;
        this.setState({
            todos: this.state.todos.concat([this.state.curItem]),
            curItem: '',
            status: '',
        });
    };

    render() {
        let todos = this.state.todos.map((item) =>
            <li>{item}</li>
        );
        return (
            <div className="App">
                <p className="App-intro">
                    <ul>{todos}</ul>
                </p>
                <div>
                    <input type="text"
                           value={this.state.curItem}
                           onChange={
                               (e) => {
                                   this.setState({curItem: e.target.value});
                               }}
                           onKeyPress={(e) => {
                               this.setState({status:e.key});
                               if (e.key==='Enter'){
                                   //this.setState({status:'enter'});
                                   e.preventDefault();
                                    this.addItem();
                               }
                           }}/>
                    <button
                        onClick={this.addItem}>add
                    </button>
                    <div>{this.state.status}</div>
                </div>
            </div>
        );
    }
}

export default App;

{/*<p className="App-intro">*/
}
{/*state.value is {this.state.value}*/
}
{/*<button onClick={this.revalue}>click</button>*/
}
{/*</p>*/
}
{/*<header className="App-header">*/
}
{/*<h1 className="App-title">Welcome to React</h1>*/
}
{/*</header>*/
}
// renderItem(i) {
//     return (
//         <div>item<strong>{i}</strong></div>
//     )
// }

// class Commit extends Component {
//     render() {return (<p>commit has hash{this.props.hash}</p>)}
// }
// {this.renderItem(3)}
// {this.renderItem(4)}
// <Commit hash='sd22323df3f333'/>