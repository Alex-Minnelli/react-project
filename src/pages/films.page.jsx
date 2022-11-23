import React, { useState, useEffect } from 'react';

export function FilmsPage(props){
    const [list, setList] = useState([]);

    function getFilms(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setList(films))
        .catch(err => console.error(err))
    }

    useEffect(() => {getFilms();}, []);

    return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <ul>
            {list.map(film => <li key={film.id}>{film.title}</li>)}
        </ul>
    </div>)
}