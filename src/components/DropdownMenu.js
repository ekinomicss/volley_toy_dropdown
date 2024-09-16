import React, { useState } from 'react';

function DropdownMenu() {
  const [selectedHippo, setSelectedHippo] = useState('');

  const handleChange = (event) => {
    setSelectedHippo(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedHippo}>
        <option value="" disabled>Select a Baby Hippo</option>
        <option value="moo_deng_1">Moo Deng 1</option>
        <option value="moo_deng_2">Moo Deng 2</option>
        {/* Add more options here if needed */}
      </select>

      {selectedHippo === 'moo_deng_1' && (
        <div style={{ marginTop: '20px' }}>
          <img 
            src="/images/moo_deng_1.jpeg" 
            alt="Moo Deng 1" 
            style={{ maxWidth: '800px' }}
          />
        </div>
      )}

    {selectedHippo === 'moo_deng_2' && (
        <div style={{ marginTop: '20px' }}>
        <img 
            src="/images/moo_deng_2.jpeg" 
            alt="Moo Deng 2" 
            style={{ maxWidth: '800px' }}
        />
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;