import React, {useState} from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props) {
  // state 
  const [displayMole, setDisplayMole] = useState(true);
  const handleMoleBopped = () => {
    props.setScore(props.score + 1);
    setDisplayMole(false);
  };

  const moleComponent = displayMole ? (
    <Mole handleClick={handleMoleBopped} setDisplayMole={setDisplayMole} />
  ) : (
    <EmptySlot setDisplayMole={setDisplayMole} />
  );

  return (
    <div>
      <h2>Mole Container</h2>
      {moleComponent}
    </div>
  );
}

export default MoleContainer;