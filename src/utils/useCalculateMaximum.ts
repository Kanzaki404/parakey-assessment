import { useEffect, useState } from "react";
let currentMaximum = 0;
const useCalculateMaximum = (data: any[]) => {
  const [maximumValue, setMaxTemperature] = useState(0);

  function calc() {
    data.forEach((element) => {
      let allTemperatures: number[] = [];
      element.hourly.forEach((temp: { temp: any }) =>
        allTemperatures.push(temp.temp)
      );
      let maxTempOfTheDay = Math.max(...allTemperatures);
      if (currentMaximum < maxTempOfTheDay) {
        currentMaximum = maxTempOfTheDay;
      }
    });
    setMaxTemperature(Math.floor(currentMaximum));
  }

  useEffect(() => {
    calc();
  }, []);

  return { maximumValue };
};

export default useCalculateMaximum;
