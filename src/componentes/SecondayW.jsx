import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondayW = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const weapon1Data = [
    {
      name: 'Rakta Ballistica',
      type: 'Crossbow',
      accuracy: 'High',
      ammomax: 210,
      noiselevel: 'Silent',
      reloadtime: '2.0 s',      
      image: 'https://static.wikia.nocookie.net/warframe/images/6/60/RaktaBallistica.png', 
    },
    {
      name: 'Hystrix',
      type: 'Pistol',
      accuracy: 'Medium',
      ammomax: 320,
      noiselevel: 'Alarming',
      reloadtime: '1.7 s', 
      image: 'https://static.wikia.nocookie.net/warframe/images/a/a7/Hystrix.png', 
    },
    {
      name: 'Grimoire',
      type: 'Tome',
      accuracy: 'Very High',
      ammomax: 0,
      noiselevel: 'Alarming',
      reloadtime: '0.0 s', 
      image: 'https://static.wikia.nocookie.net/warframe/images/2/2a/Grimoire.png', 
    },
  ];

  useEffect(() => {    
    setData(weapon1Data);
  }, []);

  return (
    <div className="warframe-table-container">
      <h2>Secondary Weapons Stats</h2>
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

export default SecondayW;