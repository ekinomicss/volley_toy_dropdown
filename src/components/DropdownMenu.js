import React, { useState } from 'react';

function DropdownMenu() {
  const [selectedHippo, setSelectedHippo] = useState('');

  const handleChange = (event) => {
    setSelectedHippo(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select 
        className="modern-dropdown"
        onChange={handleChange} 
        value={selectedHippo}
      >
        <option value="" disabled>Select a Baby Hippo</option>
        <option value="moo_deng_1">Moo Deng 1</option>
        {/* Add more options here if needed */}
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
    </div>
  );
}

export default DropdownMenu;