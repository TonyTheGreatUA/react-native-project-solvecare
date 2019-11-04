//@flow
import React, { useState, useEffect, useCallback } from 'react';

type UserType = {
  name: {
    first: string,
    last: string,
  },
  picture: {
    thumbnail: string,
  },
  email: string,
};

const useComponent4 = () => {
  const [user, setUser] = useState<UserType[]>([]);
  const [defaultLoadAmount, setDefaultLoadAmount] = useState(10);

  const makeRemoteRequest = useCallback(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          return item;
        });
        setUser(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    makeRemoteRequest();
  }, []);

  return { user, defaultLoadAmount };
};

export default useComponent4;
