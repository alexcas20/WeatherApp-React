import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    weatherData: null,
    isLoading: false,
  });

  const { weatherData, isLoading } = state;

  const getFetch = async () => {

    setState({ data: null, isLoading: true });
    try {
        
      const response = await fetch(url);
      const dataResponse = await response.json();
      console.log(dataResponse);

    
        setState({
          weatherData: dataResponse,
          isLoading: false,
        });
    
    } catch (error) {
      setState({
        weatherData: null,
        isLoading: false,
      });
    }
  };

  useEffect(() => {

    
        getFetch();
  
    
  }, [url]);

  return {
    weatherData,
    isLoading,
  };
};
