import { createContext, useReducer } from 'react';

const initialState = {
  information: {
    emergency: false,
    specialist: false,
  },
  uploaded: [],
  uploadedId: [],
  totalPrice: 0,
  tabSelected: 0,
  progress: 0,
};
const InforMationContext = createContext('');
const InformationStore = (props) => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INFORMATION':
        return { ...state, information: action.payload };
      case 'SERVICE_DATA':
        return { ...state, serviceData: action.payload };
      case 'UPLOADED':
        return { ...state, uploaded: action.payload };
      case 'PROGRESS':
        return { ...state, progress: action.payload };
      case 'UPLOADED_ID':
        return { ...state, uploadedId: action.payload };
      case 'TOTAL_PRICE':
        return { ...state, totalPrice: action.payload };
      case 'TAB_SELECTED':
        return { ...state, tabSelected: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InforMationContext.Provider value={{ state, dispatch }}>
      {props.children}
    </InforMationContext.Provider>
  );
};

export { InforMationContext, InformationStore };
