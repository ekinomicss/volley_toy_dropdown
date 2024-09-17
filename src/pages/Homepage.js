import React, { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { Brush } from 'd3';

const hippoData = [
  { id: 1, name: 'Baby Fiona', info: 'Fiona is a famous hippo born at the Cincinnati Zoo.' },
  { id: 2, name: 'Baby Gloria', info: 'Gloria is a playful hippo from the wild.' },
  { id: 3, name: 'Baby Otis', info: 'Otis is known for his love of swimming.' },
];

function HomePage() {
  const [selectedHippo, setSelectedHippo] = useState(null);

  return (
    <div>
      <h1 className="main-title">Baby Hippo Viewer</h1>
      <bruh hippos={hippoData} setSelectedHippo=setSelectedHippo} />
      {selectedHippo && (
        <div className="hippo-info">
          <h2>{selectedHippo.name}</h2>
          <p>{selectedHippo.info}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;