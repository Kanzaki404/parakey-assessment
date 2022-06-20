import { useEffect, useState } from "react";
let currentMinimum = 50;
const useCalculateMinimum = (data: any[]) => {
  const [minimumValue, setMinimumValue] = useState(0);
  function calc() {
    data.forEach((element) => {
      let allTemperatures: number[] = [];
      element.hourly.forEach((temp: { temp: any }) =>
        allTemperatures.push(temp.temp)
      );
      let minTempOfTheDay = Math.min(...allTemperatures);
      if (currentMinimum > minTempOfTheDay) {
        currentMinimum = minTempOfTheDay;
      }
    });
    setMinimumValue(Math.floor(currentMinimum));
  }

  useEffect(() => {
    calc();
  }, []);

  return { minimumValue };
};

export default useCalculateMinimum;
