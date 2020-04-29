import React from 'react';

interface Props {
  heading: String;
}

const Heading: React.FC<Props> = (props) => {
  return (
    <header className='App-header'>
      <h1>{props.heading}</h1>
    </header>
  );
};

export default Heading;
