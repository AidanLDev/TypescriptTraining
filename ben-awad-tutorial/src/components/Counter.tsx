import React from 'react';

interface Props {
  timesClicked: number,
  setTimesClicked: React.Dispatch<React.SetStateAction<number>>,
}

const Counter:React.FC<Props> = ({timesClicked, setTimesClicked}) => {
  return (
    <div>
      <button onClick={() => setTimesClicked(timesClicked => timesClicked + 1)}>Increase the count sunshine: {timesClicked}</button>
    </div>
  )
}

export default Counter;