import React from 'react';

const Choose = ({ color, setColor }) => {
  const Cstyle = {
    width: '300px',
    padding: '10px',
    margin: '15px 0',
    borderRadius: '5px',
    fontSize: '16px',
    backgroundColor: '#f9f9f9',
  };

  const handleChange = (e) => {
    setColor(e.target.value); // update parent state
  };

  return (
    <div style={{ padding: '20px' }}>
      <center>
            <label>
        <input
          type="text"
          id="color"
          placeholder="Enter a color name (e.g. red, #ff0000)"
          value={color}
          onChange={handleChange}
          style={Cstyle}
          required
        />
      </label>
      </center>
  
    </div>
  );
};

export default Choose;
