import { createContext, useReducer } from 'react';

const initialState = {
  information: {},
  uploaded: {},
};
const InforMationContext = createContext('');
const InformationStore = (props) => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INFORMATION':
        return { ...state, information: action.payload };
      case 'UPLOADED':
        return { ...state, uploaded: action.payload };
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
