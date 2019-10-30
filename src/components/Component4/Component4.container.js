//@flow
import React, { useState, useEffect } from 'react';
import Component4 from './Component4';

const Component4Container = () => {
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

  return <Component4 data={data} defaultLoadAmount={defaultLoadAmount} />;
};

export default Component4Container;
