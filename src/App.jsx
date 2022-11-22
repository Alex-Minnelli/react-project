import React from "react";
import FilmsList from './components/filmsList'
import './App.css';

export default class App extends React.Component {

  constructor(props){

    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      list: ['ready', 'set', 'GO'],
      text: ''
    };
  }

  onSubmit(event){
    event.preventDefault();
    this.setState({list: [...this.state.list, this.state.text] })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
          <button type='submit' >Add</button>
        </form>
        <ul>
          {this.state.list.map((ele, index) => {
            return <li key={index}>{ele}</li>
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}