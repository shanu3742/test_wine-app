import React, { ChangeEvent, useState } from 'react';
// import wineList from './Assets/json/wine.json'
import './App.css';
import { Wine } from './app.type';
import { wineData } from './Assets/wine';
import { calculateAlcohoMean, calculateAlcohoMedian, calculateMode } from './utils/math.utils';
import Switch from './component/switch/switch';
import Table from './component/table/table';

const App: React.FC = () => {
  let wineList: Wine[] = wineData;
  // Calculate a new property 'Gamma' for each wine in 'wineList'
  // The formula for 'Gamma' is (Ash * Hue) / Magnesium, rounded to 2 decimal places
  wineList = wineList.map((wine, wineIndex) => {
    return { ...wine, gamma: +((+wine.Ash * wine.Hue) / wine.Magnesium).toFixed(2) }
  })
  const [acidSelectionType, setAcidSelectionType] = useState<string>('gamma');
  console.log(wineList)
  const uniqueAlcoholObject: any = {};

  /**
   * 
   * @param {*} wineData 
   * @returns  **returns an array containing unique values of the "Alcohol" property**
   */
  const getUniqueAlcohol = (wineData: Wine[]): number[] => {
    const alcoholType = wineData.map((wine) => wine.Alcohol);
    const uniqueAlcoholType = Array.from(new Set(alcoholType));
    return uniqueAlcoholType;
  };
  const uniqueAlcohol = getUniqueAlcohol(wineList)
  uniqueAlcohol.forEach((alcohol, alcoholIndex) => {
    uniqueAlcoholObject[alcohol] = {
      mean: 0,
      median: 0,
      mode: [],
      name: acidSelectionType,
      [acidSelectionType]: []
    };

  });
  // Iterate through unique alcohol types in 'uniqueAlcohol'
  uniqueAlcohol.forEach((alcoholName, alcoholId) => {
    // Filter the 'wineList' to include only wines with the current 'alcoholName'
    const flavanoidsValues = wineList
      .filter((wine) => wine['Alcohol'] === alcoholName)
      .map((wine: any) => +wine[acidSelectionType]);
    // Update 'uniqueAlcoholObject' with the flavanoids values for the current alcohol type
    uniqueAlcoholObject[alcoholName][acidSelectionType] = [...flavanoidsValues]
  })

  // Iterate through unique alcohol types in the 'uniqueAlcoholObject'
  Object.keys(uniqueAlcoholObject).map((acidType, acidIndex) => {
    // Calculate the mean for the current alcohol type
    const mean = calculateAlcohoMean(uniqueAlcoholObject[acidType][acidSelectionType])
    // Calculate the median for the current alcohol type
    const median = calculateAlcohoMedian(uniqueAlcoholObject[acidType][acidSelectionType])
    // Calculate the mode for the current alcohol type
    const mode = calculateMode(uniqueAlcoholObject[acidType][acidSelectionType])
    // Update the 'uniqueAlcoholObject' with the calculated mean (rounded to 3 decimal places)
    uniqueAlcoholObject[acidType]['mean'] = +(mean.toFixed(3));
    // Update the 'uniqueAlcoholObject' with the calculated median (rounded to 3 decimal places)
    uniqueAlcoholObject[acidType]['median'] = +(median.toFixed(3))
    // Update the 'uniqueAlcoholObject' with the calculated mode (as an array)
    uniqueAlcoholObject[acidType]['mode'] = [...mode]
  })


  const onRadioButtonChanged = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    setAcidSelectionType(inputEvent.target.value)
  }


  let mathOperatorToRender = ['mean', 'median', 'mode']
  console.log(uniqueAlcoholObject)
  return (
    <div className='app-container'>
      <Switch handleSwitch={onRadioButtonChanged} selectedSwitch={acidSelectionType} />
      <Table tableList={uniqueAlcoholObject} mathOperatorToRender={mathOperatorToRender} />
    </div>
  );
}

export default App;
