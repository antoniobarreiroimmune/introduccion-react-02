import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; 


function ParentComponent() {
  
  const [message, setMessage] = useState('Mensaje inicial');

 
  const changeMessage = () => {
    setMessage('Nuevo mensaje');
  };

  return (
    <div>
      <ChildComponent message={message} />
      <button onClick={changeMessage}>Cambiar Mensaje</button>
    </div>
  );
}

export default ParentComponent;
