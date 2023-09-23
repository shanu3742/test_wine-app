import React from 'react';
import { SwitchProps } from '../../app.type';
import './switch.css'



const Switch: React.FC<SwitchProps> = ({ handleSwitch, selectedSwitch }) => {
  return (
    <div className='switch'>
      <div>
        <input
          checked={selectedSwitch === 'Flavanoids'}
          type="radio"
          id='Flavanoids'
          value='Flavanoids'
          onChange={(e) => handleSwitch(e)}
        />
        <label htmlFor='Flavanoids'>Flavanoids</label>
      </div>
      <div>
        <input
          checked={selectedSwitch === 'gamma'}
          type="radio"
          id='gamma'
          value='gamma'
          onChange={(e) => handleSwitch(e)}
        />
        <label htmlFor='gamma'>gamma</label>
      </div>
    </div>
  );
}

export default Switch;
