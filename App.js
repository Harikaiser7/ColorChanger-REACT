import React, { useState } from 'react';
import Choose from './Choose';
import Content from './Content';

function App() {
  const [color, setColor] = useState('');

  return (
    <div>
      <Choose color={color} setColor={setColor} />
      <Content color={color} />
    </div>
  );
}

export default App;
