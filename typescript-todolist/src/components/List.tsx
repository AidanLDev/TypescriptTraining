import React from 'react';

interface Props {
  list: string[];
}

const List: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((name) => (
        <li key={name}>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
