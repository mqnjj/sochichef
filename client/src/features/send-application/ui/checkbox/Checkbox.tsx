import { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      type='checkbox'
      id='footer-checkbox'
      required={true}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Checkbox;
