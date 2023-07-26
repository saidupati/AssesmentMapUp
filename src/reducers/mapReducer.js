const initialState = {
    regionData: null,
  };
  
  const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_REGION_DATA':
        return {
          ...state,
          regionData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default mapReducer;
  