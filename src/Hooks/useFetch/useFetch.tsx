import {useEffect, useState} from "react";
import axios from "axios";
import Config from "react-native-config";


function useFetch(url : any ){

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {// @ts-ignore
            const {data: responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            // @ts-ignore
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(()=> {
        fetchData();
    },[]);

    return {error,loading,data};

}

export default useFetch;
