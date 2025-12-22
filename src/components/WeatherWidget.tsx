import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Thermometer, CloudFog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  isDay: boolean;
}

// Mogappair coordinates (approximate)
const MOGAPPAIR_LAT = 13.0827;
const MOGAPPAIR_LON = 80.1924;

const getWeatherInfo = (code: number, isDay: boolean) => {
  // WMO Weather interpretation codes
  const weatherMap: Record<number, { description: string; icon: typeof Sun }> = {
    0: { description: "Clear sky", icon: Sun },
    1: { description: "Mainly clear", icon: Sun },
    2: { description: "Partly cloudy", icon: Cloud },
    3: { description: "Overcast", icon: Cloud },
    45: { description: "Foggy", icon: CloudFog },
    48: { description: "Depositing rime fog", icon: CloudFog },
    51: { description: "Light drizzle", icon: CloudRain },
    53: { description: "Moderate drizzle", icon: CloudRain },
    55: { description: "Dense drizzle", icon: CloudRain },
    61: { description: "Slight rain", icon: CloudRain },
    63: { description: "Moderate rain", icon: CloudRain },
    65: { description: "Heavy rain", icon: CloudRain },
    71: { description: "Slight snow", icon: CloudSnow },
    73: { description: "Moderate snow", icon: CloudSnow },
    75: { description: "Heavy snow", icon: CloudSnow },
    80: { description: "Slight rain showers", icon: CloudRain },
    81: { description: "Moderate rain showers", icon: CloudRain },
    82: { description: "Violent rain showers", icon: CloudRain },
    95: { description: "Thunderstorm", icon: CloudRain },
  };

  return weatherMap[code] || { description: "Unknown", icon: Cloud };
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${MOGAPPAIR_LAT}&longitude=${MOGAPPAIR_LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,is_day&timezone=Asia%2FKolkata`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day === 1,
        });
      } catch (err) {
        setError("Unable to load weather");
        console.error("Weather fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-blue-500/10 to-sky-500/10 border-blue-200/50">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="bg-gradient-to-br from-gray-500/10 to-gray-400/10 border-gray-200/50">
        <CardContent className="p-4 text-center text-muted-foreground">
          <Cloud className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">{error || "Weather unavailable"}</p>
        </CardContent>
      </Card>
    );
  }

  const weatherInfo = getWeatherInfo(weather.weatherCode, weather.isDay);
  const WeatherIcon = weatherInfo.icon;

  return (
    <Card className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border-sky-200/50 overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-sky-500/20">
              <WeatherIcon className="w-10 h-10 text-sky-600" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{weather.temperature}</span>
                <span className="text-xl text-muted-foreground">°C</span>
              </div>
              <p className="text-sm text-muted-foreground">{weatherInfo.description}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Mogappair</p>
            <p className="text-xs text-muted-foreground">Chennai, TN</p>
          </div>
        </div>
        
        <div className="bg-background/50 px-4 py-3 flex justify-around border-t border-sky-200/30">
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Wind className="w-4 h-4 text-gray-500" />
            <span>{weather.windSpeed} km/h</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Thermometer className="w-4 h-4 text-orange-500" />
            <span>Feels like {weather.temperature}°</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
