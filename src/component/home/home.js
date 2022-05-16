import React, { useState,useEffect }  from 'react';

import Form from '../form/form.js';
import Result from '../result/result.js';
import axios from 'axios';
  export default function App (props) {
 
    const [data, setData] = useState(null);
    const [requestParams, setRequest] = useState({});
    const [header, setHeader] = useState({});
    const [isloading, setLoading] = useState(false);
    const handleApiCall = async (requestParams) => {
      setRequest(requestParams);
      let methodCall = requestParams.method.toLowerCase();
      const response = await axios[methodCall](requestParams.url, (requestParams.body) ? (requestParams.body) : null);
      const result = {
        
        results: response.data
      };
      const headers = {
        
        headers: response.headers
      };
      setHeader(headers);
      setData(result);
    }
    const Loadingfunction = () => {
      return new Promise((resolve) => setTimeout(resolve, 1500));

  }
  

    const handleClick = () => setLoading(true);
    useEffect(() => {
        if (isloading) {
          Loadingfunction().then(() => {
                setLoading(false);
            });
        }
    }, [isloading]);

   
    return (
      <>
        <Form handleClick={handleClick} handleApiCall={handleApiCall} />
     <Result  data={data} 
        url={requestParams.url} header={header}  method={requestParams.method} loading={isloading} />
      </>
    );
  }
