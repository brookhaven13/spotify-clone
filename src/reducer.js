export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBj6dPkfqUpLTWJJ984zAOxa40kilcC58buYKcEcs7SQh4LOQqt7SEKIjsDDFZOr3gYyhhNyQpz6EPQbLcTtIhqFGEdMKbcy67SlNE8V22c0q5Xd5LiCYKmv6Gdwy117Vs1W_aHAQ-OJBByn44CTK6WTF1bT7VkF-imeBbAND4NzzhKINwMRVVkzvxdIf_NvQ",
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
    default:
      return state;
  }
};

export default reducer;
