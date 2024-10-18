import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WarframeTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const warframeData = [
    {
      name: 'Excalibur',
      health: 370,
      shield: 370,
      armor: 240,
      energy: 150,
      sprint: 1,
      image: 'https://static.wikia.nocookie.net/warframe/images/2/2c/ExcaliburIcon272.png', 
    },
    {
      name: 'Mag',
      health: 280,
      shield: 555,
      armor: 105,
      energy: 190,
      sprint: 1,
      image: 'https://static.wikia.nocookie.net/warframe/images/8/89/MagIcon272.png', 
    },
    {
      name: 'Revenant',
      health: 370,
      shield: 875,
      armor: 135,
      energy: 190,
      sprint: 1,
      image: 'https://static.wikia.nocookie.net/warframe/images/0/02/RevenantIcon272.png', 
    },
  ];

  useEffect(() => {    
    setData(warframeData);
  }, []);

  return (
    <div className="warframe-table-container">
      <h2>Warframe Stats</h2>
      <div className="table-wrapper">
        <table className="warframe-table">
          <thead>
            <tr>
              <th>Warframe</th>
              <th>Image</th> 
              <th>Health</th>
              <th>Shield</th>
              <th>Armor</th>
              <th>Energy</th>
              <th>Sprint Speed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((warframe, index) => (
              <tr key={index}>
                <td>{warframe.name}</td>
                <td>
                  <img src={warframe.image} alt={warframe.name} style={{ width: '50px', height: 'auto' }} /> {/* Imagen del Warframe */}
                </td>
                <td>{warframe.health}</td>
                <td>{warframe.shield}</td>
                <td>{warframe.armor}</td>
                <td>{warframe.energy}</td>
                <td>{warframe.sprint}</td>
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

export default WarframeTable;