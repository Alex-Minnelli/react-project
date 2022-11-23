import React, { useState } from "react";
import '../App.css';

export function HomePage(props){

  let [list, setList] = useState(['ready', 'set', 'GO']);
  let [text, setText] = useState('');

  function onSubmit(event){
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText('');
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button type='submit' >Add</button>
      </form>
      <ul>
        {list.map((ele, index) => {
          return <li key={index}>{ele}</li>
        })}
      </ul>
    </div>
  );
}