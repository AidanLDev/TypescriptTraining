import React, { useRef } from 'react';

interface Person {
  firstName: string,
  lastName: string,
  age: number,
  hobbies: [],
}

interface Props {
  label: string,
  error?: boolean,
  inputPosition?: number,
  setValue?: () => string,
  person?: Person,
  inputVal: string,
  setInputVal: React.Dispatch<React.SetStateAction<string>>,
}

const TextField: React.FC<Props> = ({label, setInputVal, inputVal}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange:React.ChangeEventHandler<HTMLInputElement> = e => setInputVal(e.target.value);
  return (
    <div>
      <span>{label}</span>
      <input ref={inputRef} onChange={handleChange} />
      <p>Say something nice: {inputVal}</p>
    </div>
  );
};

export default TextField;