import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) =>  {setData(data.data)})
      .catch((error) => {setError(error)} )
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};