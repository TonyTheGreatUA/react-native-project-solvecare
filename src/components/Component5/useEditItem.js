//@flow
import React, { useState, useCallback } from 'react';

const useEditItem = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = useCallback(() => {
    setIsEditable(false);
  }, []);

  const handlePicker = useCallback(() => {
    setIsVisible(!isVisible);
  }, []);

  /*const handleItemInput = useCallback((name: string) => {
    return (value: string) => setItem({ ...item, [name]: value });
  }, []);*/
};

export default useEditItem;
