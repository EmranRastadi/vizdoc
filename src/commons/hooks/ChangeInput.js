import { useCallback, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { InforMationContext } from '../services/Contexts/InformationStore.context';

const useChangeInput = (event) => {
  const { state } = useContext(InforMationContext);
  const [data, setData] = useState(state.information);
  function handleChange({ target: { name, type, value, checked } }) {
    let dataClone = { ...data };
    dataClone[name] = type === 'checkbox' ? checked : value;
    setData(dataClone);
  }
  return { data, handleChange };
};

const useMakeFilter = (data) => {
  const urlMake = new URLSearchParams();
  let handleMakeFilter = useCallback((data) => {
    Object.entries(data).map(([key, value]) => {
      urlMake.append(key, value);
    });
  }, []);
  return { handleMakeFilter, urlMake };
};

export { useChangeInput, useMakeFilter };
