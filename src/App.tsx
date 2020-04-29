import React, { useState } from 'react';
import Header from './components/UI/Header';
import TextField from './components/UI/TextField';
import Button from './components/UI/Button';
import List from './components/List';
import './App.css';

function App() {
  const [name, setName] = useState<string>('');
  const [names, setNames] = useState<string[]>([]);

  const clicked = () => {
    setNames((prevState: string[]) => [...prevState, name]);
  };

  return (
    <div className='App'>
      <Header heading='Typscript with React!' />
      <TextField
        name={name}
        handleChange={(event) => setName(event.target.value)}
      />
      <Button clicked={clicked} />
      <List list={names} />
    </div>
  );
}

export default App;
