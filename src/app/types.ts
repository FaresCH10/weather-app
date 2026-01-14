export interface WeatherData {
    city: {
      name: string;
      country: string;
      coord: {
        lat: number;
        lon: number;
      };
    };
    list: Array<{
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
      };
      weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
      }>;
      wind: {
        speed: number;
        deg: number;
      };
      dt_txt: string;
    }>;
  }
  