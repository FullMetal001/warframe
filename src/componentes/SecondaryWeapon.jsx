import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondaryWeapon = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const weapon1Data = [
    {
      name: 'Rakta',
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
    <div className='warframe-container'>
        <div className='warframe-info'>
            {data.map((warframe) => (
                    <div className='warframe-item' key={warframe.name}>
                        <img src={warframe.image} alt={warframe.name} className='warframe-image' />
                        <div className='warframe-details'>
                            <h2>{warframe.name}</h2>
                            <ul>
                                <li>Type: <span className='warframe-color'>{warframe.type}</span></li>
                                <li>Acuracy: <span className='warframe-color'>{warframe.accuracy}</span></li>
                                <li>Ammo Max: <span className='warframe-color'>{warframe.ammomax}</span></li>
                                <li>Noise Level: <span className='warframe-color'>{warframe.noiselevel}</span></li>
                                <li>Reload Time: <span className='warframe-color'>{warframe.reloadtime}</span></li>
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

export default SecondaryWeapon