import React, { useState } from 'react';

const Content = ({ color }) => {

  const [colorChange,setColortext]=useState('');

  const   handleText =()=>{
     setColortext(colorChange==='black'?'white':'black');
     };
       const boxStyle = {
    border: '2px solid black',
    padding: '100px',
    margin: '40px',
    width: '450px',
    borderRadius: '8px',
    backgroundColor: color || '#f9f9f9', // default if empty
    color:   colorChange ,
    textAlign: 'center',
    fontWeight: 'bold'
  };
  return (
    <div>
      <center>
        <p style={boxStyle}>The color: {color || 'None'}</p>
        <button type='submit' 
        onClick={handleText}>
          Toggle</button>
      </center>
    </div>
  );
};

export default Content;
