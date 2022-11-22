import React, { Component } from 'react';

export default class FilmsList extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: [],
        }
    }

    getFilms(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => {return res.json()})
        .then(res => this.setState({list: res}))
        .catch(err => console.error(err))
    }

    componentDidMount(){
        this.getFilms();
    }


    render(){
        return <ul>
            {this.state.list.map(ele => <li key={ele.id}>{ele.title}</li>)}
        </ul>
    }
}