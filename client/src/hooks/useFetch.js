import { useEffect, useState } from "react";
import * as request from "../../lib/request.js"
const baseUrl = import.meta.env.VITE_APP_URL;

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await request.get(`${baseUrl}${url}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
