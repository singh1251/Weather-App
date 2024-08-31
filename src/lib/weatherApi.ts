export async function fetchWeatherData(localityId: string | undefined) {
  const response = await fetch(
    `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
    {
      headers: {
        "X-Zomato-Api-Key": process.env.NEXT_PUBLIC_ZOMATO_API_KEY || "",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
}
