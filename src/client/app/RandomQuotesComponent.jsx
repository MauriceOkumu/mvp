import React from 'react';

let RandomQuotes = (props) => (
  <div className="well">
    <ul><h2>Random Quotes</h2>
    {props.quotes.map((quote ,index)=>
    <li key={index}>{quote}</li>)}
    </ul>
  </div>
)

export default  RandomQuotes;