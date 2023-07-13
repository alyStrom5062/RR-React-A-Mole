import React, { useEffect } from 'react';
import moleHillImg from "../images/molehill.png";

function EmptySlot(props) {
  useEffect(() => {
    const randSeconds = Math.ceil(Math.random() * 5000);
    const timer = setTimeout(() => {
      props.setDisplayMole(true);
    }, randSeconds);

    return () => clearTimeout(timer);
  }, []);

  return (
    <img
    style={{ width: '30vw' }}
    src={moleHillImg}
    alt="Mole"
    onClick={props.handleClick}
  />
  );
}

export default EmptySlot;