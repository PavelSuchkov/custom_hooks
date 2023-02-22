import {useEffect, useState} from "react";

export const useRequest =  (request) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {      // timeout uses for delay and demonstration download data process
            request()
                .then(response => setData(response.data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }, 1000)
    }, [])

    return [data, loading, error]
};