const initialState = {
  labels: {},
  formData: {},
};

const InformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LABELS_WHY':
      return { ...state, labels: action.payload };
    case 'FORM_DATA':
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export { InformationReducer };
