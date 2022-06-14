import { GET_DATA, IS_ERROR, IS_LOADING } from "./AllProductAction";

const initState = {
  isLoading: false,
  isError: false,
  allFruits: [],
};

export const AllProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        allFruits: [],
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        allFruits: [],
      };
    }
    case GET_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        allFruits: payload,
      };
    }
    default: {
      return state;
    }
  }
};
