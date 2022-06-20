import { useEffect, useState } from "react";

const useApi = (today: number) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [geocode, setGeoCode] = useState({lon: 0, lat:0})
  async function openWeatherAPI() {
    const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=gothenburg,SE&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

    try {
      const coordinates = await fetch(geocodeUrl, { method: "get" });
      const data = await coordinates.json();

      for (let i = 0; i < 4; i++) {
        const historicalWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=57.7072326&lon=11.9670171&dt=${
            today - i * 86400
          }&cnt=16&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        const weatherData = await historicalWeather.json();
        setData((prevValue: any) => [...prevValue, weatherData]);
        setLoading(false)
      }
    } catch (error) {
      console.log("Request failed", error);
    }
  }

  useEffect(() => {
    openWeatherAPI();
  }, []);

  return { loading, data };
};

export default useApi;
