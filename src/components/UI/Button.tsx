import React from 'react';

interface Props {
  clicked:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button: React.FC<Props> = ({ clicked }) => {
  return <button onClick={clicked}>Add name to list</button>;
};

export default Button;
