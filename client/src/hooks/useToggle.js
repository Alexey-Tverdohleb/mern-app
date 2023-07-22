import { useState } from 'react';

export default function useToggle(initial = false) {
  const [toggleValue, setToggleValue] = useState(initial);

  const toggle = () => {
    setToggleValue((prevValue) => !prevValue);
  };

  return [toggleValue, toggle];
}
