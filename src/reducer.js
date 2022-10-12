export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  token:
    "BQA7tHYj5zTbsOCZK7fSkYvDRKDQcpFdawgRq6N0pdRdB89j_xzQF8oWKXwItEEBNannm93PG9IhkJ_ZWpDl2xEIueEWQmLtK79ZCoYiWzYQ5WllW4UlRi04O8gTNiznv-3YVTIbHrLdz8qMRLncSzeIV7CLVVpN0IADPZJtMvdsSi4udeU6Yc5ZidS_V_g0eA",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
