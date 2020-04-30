export const Actions = {
  GET: (name) => `GET_${name.toUpperCase()}`,
  SET: (name) => `SET_${name.toUpperCase()}`,
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
};
