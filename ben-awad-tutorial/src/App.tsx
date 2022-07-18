import React, {useState} from 'react';
import './App.css';
import TextField from './components/TextField';
import Counter from './components/Counter';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputVal, setInputVal] = useState<string>('');

  

  return (
    <div className="App">
      <TextField
        label='Nice Word Box: '
        person={{age: 22, firstName: 'John', lastName: 'Fartehr', hobbies: []}}
        inputVal={inputVal}
        setInputVal={setInputVal}
        />
      <Counter timesClicked={count} setTimesClicked={setCount} />
    </div>
  );
}

export default App;
