const apikey = "5a79c37539f7801db532438e2fcf05a3";
const baseurl = "https://api.openweathermap.org/data/2.5";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid="44975064b12bb7e22c920a39938cad85"

const getWeatherData = (info, searchitem) => {
  const url = new URL(baseurl + "/" + info);
  url.search = new URLSearchParams({ ...searchitem, appid: apikey });

  console.log("WeatherService URL==", url);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formateData = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg },
    dt,
    weather,
    sys: { country, sunrise, sunset },
    timezone,
    name,
  } = data;

  const { main: details, icon } = weather[0];
  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    deg,
    dt,
    country,
    sunrise,
    sunset,
    timezone,
    name,
    details,
    icon,
  };
};

const getFormatedData = async (searchitem) => {
  try {
    const getCurrentData = await getWeatherData("weather", searchitem)
      .then(formateData)
      .catch((e) => console.log("Promiss Error", e));

    return getCurrentData;
  } catch (error) {
    console.log("Weatherservice getFormateData data fetching error=", error);
  }
};

const getFormatedImageUrl = (image) =>
  `https://openweathermap.org/img/wn/${image}@2x.png`;

export default getFormatedData;
export { getFormatedImageUrl };
