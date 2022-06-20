import { useEffect, useState } from "react";
let allMedianTemperatures: any[] = []
const useCalculateMedian = (data: any[]) => {
  const [medianValue, setMedianValue] = useState(0);
  //get median of each day
  //create an array of all medians
  // get median from the array of medians...
  
  function getMedian(_allTemperatures: number[]){
    //TIME OUT!!!!
    return _allTemperatures[0]
  }


  function calc() {
    data.forEach(element => {
      let allTemperatures: number[] = [];
      element.hourly.forEach((temp: { temp: any }) =>
        allTemperatures.push(temp.temp)
      );
      allMedianTemperatures.push(getMedian(allTemperatures))
    })
    setMedianValue(getMedian(allMedianTemperatures))
  }


  useEffect(() => {
    calc();
  }, []);

  return { medianValue };
};

export default useCalculateMedian;