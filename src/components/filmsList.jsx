import React, { useState, useEffect } from 'react';

/*export default class FilmsList extends Component{
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
}*/

export default function FilmsList(props){
    const [list, setList] = useState([]);

    function getFilms(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setList(films))
        .catch(err => console.error(err))
    }

    useEffect(() => {getFilms();}, []);

    return <ul>{list.map(film => <li key={film.id}>{film.title}</li>)}</ul>
}