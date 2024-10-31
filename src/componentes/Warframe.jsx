import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Warframe = () => {
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
      image: 'https://static.wikia.nocookie.net/warframe/images/4/41/ExcaliburFull.png', 
    },
    {
      name: 'Mag',
      health: 280,
      shield: 555,
      armor: 105,
      energy: 190,
      sprint: 1,
      image: 'https://static.wikia.nocookie.net/warframe/images/6/6c/MagFull.png', 
    },
    {
      name: 'Revenant',
      health: 370,
      shield: 875,
      armor: 135,
      energy: 190,
      sprint: 1,
      image: 'https://static.wikia.nocookie.net/warframe/images/1/1d/RevenantFull.png', 
    },
  ];

  useEffect(() => {    
    setData(warframeData);
  }, []);

  return (
    <div className='warframe-container'>
        <div className='warframe-info'>
            {data.map((warframe) => (
                    <div className='warframe-item' key={warframe.name}>
                        <img src={warframe.image} alt={warframe.name} className='warframe-image' />
                        <div className='warframe-details'>
                            <h2>{warframe.name}</h2>
                            <ul>
                                <li>Health: <span className='warframe-color'>{warframe.health}</span></li>
                                <li>Shield: <span className='warframe-color'>{warframe.shield}</span></li>
                                <li>Armor: <span className='warframe-color'>{warframe.armor}</span></li>
                                <li>Energy: <span className='warframe-color'>{warframe.energy}</span></li>
                                <li>Running speed: <span className='warframe-color'>{warframe.sprint}</span></li>
                            </ul>
                        </div>
                    </div>
            ))}
        </div>
        <div className='table-button'>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    </div>
  )
}

export default Warframe