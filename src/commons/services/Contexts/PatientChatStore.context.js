import { createContext, useReducer } from 'react';

const PatientChatContext = createContext('');
const PatientChatStore = (props) => {
  const initialState = {};

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PatientChatContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PatientChatContext.Provider>
  );
};

export { PatientChatStore, PatientChatContext };
