//@flow
import React, { useState, useEffect } from 'react';

const useComponent4 = () => {
  const [data, setData] = useState([]);
  const [defaultLoadAmount, setDefaultLoadAmount] = useState(10);

  const makeRemoteRequest = () => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          return item;
        });
        setData(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    makeRemoteRequest();
  }, []);

  return { data, defaultLoadAmount };
};

export default useComponent4;
