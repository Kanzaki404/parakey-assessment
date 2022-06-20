import { useEffect, useState } from "react";
let numberOfData = 0;
let sumOfTemperatures = 0;
const useCalculateMean = (data: any[]) => {
  const [meanValue, setMeanValue] = useState(0);

  function calc() {
    data.forEach((element) => {
      numberOfData += element.hourly.length;
      element.hourly.forEach((temperature: { temp: number }) => {
        sumOfTemperatures += temperature.temp;
      });
    });

    setMeanValue(Math.floor(sumOfTemperatures / numberOfData));
  }

  useEffect(() => {
    calc();
  }, []);

  return { meanValue };
};

export default useCalculateMean;
