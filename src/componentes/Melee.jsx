import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MeleeW = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const weapon1Data = [
    {
      name: 'Nepheri',
      type: 'Dual Daggers',
      range: '1.9m',
      totaldamage: 261,
      noiselevel: 'Silent',
      firerate: '1.0 s',      
      image: 'https://static.wikia.nocookie.net/warframe/images/7/7d/Nepheri.png', 
    },
    {
        name: 'Falcor',
        type: 'Glaive',
        range: '1.3m',
        totaldamage: 230,
        noiselevel: 'Silent',
        firerate: '0.83 s',      
        image: 'https://static.wikia.nocookie.net/warframe/images/d/d8/Falcor.png', 
    },
    {
        name: 'Dual Kamas Prime',
        type: 'Dual Swords',
        range: '2.4m',
        totaldamage: 160,
        noiselevel: 'Silent',
        firerate: '1.17 s',      
        image: 'https://static.wikia.nocookie.net/warframe/images/5/5b/DualKamasPrime.png', 
    },
  ];

  useEffect(() => {    
    setData(weapon1Data);
  }, []);

  return (
    <div className="warframe-table-container">
      <h2>Melee Stats</h2>
      <div className="table-wrapper">
        <table className="warframe-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th> 
              <th>Type</th>
              <th>Range</th>
              <th>Total Damage</th>
              <th>Noise Lvl</th>
              <th>Fire Rate</th>
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
                <td>{weapon1.range}</td>
                <td>{weapon1.totaldamage}</td>
                <td>{weapon1.noiselevel}</td>
                <td>{weapon1.firerate}</td>
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

export default MeleeW;