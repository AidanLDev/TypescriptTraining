import React, { useRef } from 'react';

interface Props {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({ name, handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input id='name' ref={inputRef} onChange={handleChange} value={name} />
    </div>
  );
};

export default TextField;
