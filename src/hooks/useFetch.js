import { useEffect, useState } from "react";

function useFetch(fetchFn, initialData) {
  const [isFetching, setIsFetching] = useState();
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadData() {
      setIsFetching(true)
      try {
        const fetchedData = await fetchFn();
        setData(fetchedData);
      } catch (error) {        
        setError({
          message: error.message || "Couldn't load user places at the moment",
        });        
      }  
      setIsFetching(false);    
    }
    loadData();
  }, [fetchFn]);

  return {
    isFetching,
    data,
    setData,
    error,
    setError,
  }
}

export default useFetch;
