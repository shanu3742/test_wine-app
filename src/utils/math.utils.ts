// Function to calculate the mean of an array
export const calculateAlcohoMean = (acidTypeList:number[]) => {
    const sum = acidTypeList.reduce((previousSum, currentValue) => previousSum + currentValue, 0);
    return sum / acidTypeList.length;
}

export const calculateAlcohoMedian = (acidTypeList:number[]) => {
    const sortedAcidTypeList = acidTypeList.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedAcidTypeList.length / 2);

    if (sortedAcidTypeList.length % 2 === 0) {
        return (sortedAcidTypeList[middle - 1] + sortedAcidTypeList[middle]) / 2;
    } else {
        return sortedAcidTypeList[middle];
    }
}

// Function to calculate the mode of an array
export const calculateMode = (acidTypeList:number[]) => {
    const frequencyMap:any = {};
    let valueRepetition = 0;
    let modes :any= [];

    acidTypeList.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        if (frequencyMap[value] > valueRepetition) {
            valueRepetition = frequencyMap[value];
            modes = [value];
        } else if (frequencyMap[value] === valueRepetition) {
            modes.push(value);
        }
    });

    return modes;
}