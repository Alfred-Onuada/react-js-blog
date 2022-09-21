import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();

    fetch(url, { signal: abortFetch.signal })
      .then(res => {
        if (!res.ok) {
          throw res.statusText;
        }
  
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsLoading(false);
          setError(err);
        }
      });

      // this is useful because if the fetch doesn't finish and the user changes the component in view it will try to interact with the previos component
      // and because it doesn't exist any longer it will throw an error
      return () => abortFetch.abort();
  }, [url])


  return { data, isLoading, error }
}

export default useFetch;