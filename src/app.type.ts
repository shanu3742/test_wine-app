export interface Wine {
    Alcohol: number
    "Malic Acid": number
    Ash: number|string
    "Alcalinity of ash": number
    Magnesium: number
    "Total phenols": number
    Flavanoids: number|string
    "Nonflavanoid phenols": number|string
    Proanthocyanins: number|string
    "Color intensity": number|string
    Hue: number
    "OD280/OD315 of diluted wines": number|string
    Unknown: number     
  }
 export  interface UniqueAlcoholObject {
    [alcohol: number]: {
      mean: number;
      median: number;
      mode: number[];
      name: string;
      gamma?:number[];
      Flavanoids?:number[]

    };
  }
 export interface SwitchProps {
    handleSwitch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedSwitch: string;
  }
 export  interface TableProps {
    tableList: any;
    mathOperatorToRender: string[];
  }