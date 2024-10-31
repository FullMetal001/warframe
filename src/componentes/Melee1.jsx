import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Melee1 = () => {
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
        name: 'Kamas',
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
    <div className='warframe-container'>
        <div className='warframe-info'>
            {data.map((warframe) => (
                    <div className='warframe-item' key={warframe.name}>
                        <img src={warframe.image} alt={warframe.name} className='warframe-image' />
                        <div className='warframe-details'>
                            <h2>{warframe.name}</h2>
                            <ul>
                                <li>Type: <span className='warframe-color'>{warframe.type}</span></li>
                                <li>Range: <span className='warframe-color'>{warframe.range}</span></li>
                                <li>Total Damage: <span className='warframe-color'>{warframe.totaldamage}</span></li>
                                <li>Noise Level: <span className='warframe-color'>{warframe.noiselevel}</span></li>
                                <li>Fire Rate: <span className='warframe-color'>{warframe.firerate}</span></li>
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

export default Melee1