import React, { useState } from 'react';

function DropdownMenu() {
  const [selectedHippo, setSelectedHippo] = useState('');

  const handleChange = (event) => {
    setSelectedHippo(event.target.value);
    if (event.target.value === 'moo_deng_1') {
      nonExistentFunction();
    }
  };

  return (
    <div className="dropdown-container">
      <select 
        className="modern-dropdown"
        onChange={handleChange} 
        value={selectedHippo}
      >
        <option value="" disabled>Select a Baby Hippo</option>
        <option value="moo_deng_1">Moo Deng: Cute</option>
        <option value="moo_deng_2">Moo Deng: Grab</option>
        <option value="moo_deng_3">Moo Deng: Attack</option>
      </select>

      {selectedHippo === 'moo_deng_1' && (
        <div className="image-container">
          <img 
            src="/images/moo_deng_1.jpeg" 
            alt="Moo Deng 1" 
            className="hippo-image"
          />
        </div>
      )}
      {selectedHippo === 'moo_deng_2' && (
        <div className="image-container">
          <img 
            src="/images/moo_deng_1.jpeg" 
            alt="Moo Deng 2" 
            className="hippo-image"
          />
        </div>
      )}
      {selectedHippo === 'moo_deng_3' && (
        <div className="image-container">
          <img 
            src="/images/moo_deng_3.jpeg" 
            alt="Moo Deng 3" 
            className="hippo-image"
          />
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;