import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryWeapons = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const weapon1Data = [
    {
      name: 'Bubonico',
      type: 'Arm Cannon',
      accuracy: 'Very High',
      ammomax: 0,
      noiselevel: 'Alarming',
      reloadtime: '4.5 s',      
      image: 'https://static.wikia.nocookie.net/warframe/images/7/72/Bubonico.png', 
    },
    {
      name: 'Simulor',
      type: 'Rifle',
      accuracy: 'N/A',
      ammomax: 72,
      noiselevel: 'Alarming',
      reloadtime: '3.0 s', 
      image: 'https://static.wikia.nocookie.net/warframe/images/b/bf/Simulor.png', 
    },
    {
      name: 'Felarx',
      type: 'Shotgun',
      accuracy: 'Very Low',
      ammomax: 60,
      noiselevel: 'Alarming',
      reloadtime: '3.0 s', 
      image: 'https://static.wikia.nocookie.net/warframe/images/1/1c/Felarx.png', 
    },
  ];

  useEffect(() => {    
    setData(weapon1Data);
  }, []);

  return (
    <div className="warframe-table-container">
      <h2>Primary Weapons Stats</h2>
      <div className="table-wrapper">
        <table className="warframe-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th> 
              <th>Type</th>
              <th>Accuracy</th>
              <th>Ammo Max</th>
              <th>Noise Lvl</th>
              <th>Reload Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((weapon1, index) => (
              <tr key={index}>
                <td>{weapon1.name}</td>
                <td>
                  <img src={weapon1.image} alt={weapon1.name} style={{ width: '50px', height: 'auto' }} /> 
                </td>
                <td>{weapon1.type}</td>
                <td>{weapon1.accuracy}</td>
                <td>{weapon1.ammomax}</td>
                <td>{weapon1.noiselevel}</td>
                <td>{weapon1.reloadtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='table-button'>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
};

export default PrimaryWeapons;