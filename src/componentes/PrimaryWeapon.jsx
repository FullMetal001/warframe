import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryWeapon = () => {
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

export default PrimaryWeapon