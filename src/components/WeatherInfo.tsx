"use client";

import { fetchWeatherData } from "@/lib/weatherApi";
import { useEffect, useState } from "react";
import Card from "./Card";
import { FaLocationDot } from "react-icons/fa6";
import { GiWindSlap, GiWindsock } from "react-icons/gi";
import { BiSolidCloudLightning } from "react-icons/bi";
import { SiRainmeter } from "react-icons/si";
import Image from "next/image";

interface WeatherInfoProps {
  localityData:
    | {
        city: string;
        locality: string;
        locality_id: string;
        latitude: number;
        longitude: number;
      }
    | undefined;
}

export default function WeatherInfo({ localityData }: WeatherInfoProps) {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData(localityData?.locality_id);
        setWeatherData(data.locality_weather_data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      setLoading(false);
    };

    getWeatherData();
  }, [localityData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#03045e]"></div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#03045e] mb-4">Oops!</h2>
          <p className="text-gray-600">No weather data available.</p>
        </div>
      </div>
    );
  }

  const date = new Date();

  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  const monthName = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const currentDate = `${dayOfWeek}, ${monthName} ${day}, ${year}`;

  return (
    <section className="mt-16 sm:mt-32">
      <section className="w-[90%] sm:w-[450px] mx-auto">
        <Card>
          <div className="relative">
            <p className="text-2xl">
              Today <span className="text-base block">{currentDate}</span>{" "}
            </p>

            <div className="absolute right-0 top-0">
              <Image src="/wIcon.png" alt="icon" width={50} height={50} />
            </div>
          </div>
          <div className="font-bold my-6">
            <p className="text-3xl sm:text-4xl md:text-5xl mb-3">
              {weatherData.temperature
                ? `${weatherData.temperature}°C`
                : "Currently Unavaliable"}
            </p>
            <p>
              Humidity-{" "}
              {weatherData.humidity ? `${weatherData.humidity}` : "NA"}
            </p>
          </div>
          <p className="text-lg my-2">
            <FaLocationDot className="w-3 h-4 inline mr-1" />
            {localityData?.locality}
          </p>
        </Card>
      </section>

      <section className="w-[90%] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <Card>
            <p className="font-bold">
              <GiWindSlap className="w-6 h-6 inline mr-2" />
              Wind Speed-{" "}
              {weatherData.wind_speed ? `${weatherData.wind_speed}` : "NA"}
            </p>
          </Card>

          <Card>
            <p className="font-bold">
              <GiWindsock className="w-6 h-6 inline mr-2" />
              Wind Direction-{" "}
              {weatherData.wind_direction
                ? `${weatherData.wind_direction}`
                : "NA"}
            </p>
          </Card>

          <Card>
            <p className="font-bold">
              <BiSolidCloudLightning className="w-7 h-7 inline mr-2" />
              Rain Intensity-{" "}
              {weatherData.rain_intensity
                ? `${weatherData.rain_intensity}`
                : "NA"}
            </p>
          </Card>

          <Card>
            <p className="font-bold">
              <SiRainmeter className="w-5 h-5 inline mr-2" />
              Rain Accumulation-{" "}
              {weatherData.rain_accumulation
                ? `${weatherData.rain_accumulation}`
                : "NA"}
            </p>
          </Card>
        </div>
      </section>
    </section>
  );
}
