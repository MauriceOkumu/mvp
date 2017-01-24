import React from 'react';



let RandomQuotes = (props) => (
  <div className="well">
    <ul>
    {props.quotes.map((quote ,index)=>
    <li key={index}>{quote}</li>)}
    </ul>
  </div>
)

export default  RandomQuotes;