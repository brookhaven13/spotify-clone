// spotify doc: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "d13ba6b8e776434f8212d7cd4f53d39a";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // spotify response token in url looks like http://localhost:3000/#access_token=RESPONSE_TOKEN&token_type=Bearer&expires_in=3600

  return window.location.hash
    .substring(1) // get string after hash sign(#)
    .split("&") // get url params
    .reduce((initial, item) => {
      let parts = item.split("="); // ['access_token', 'RESPONSE_TOKEN']
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial; // initial = { 'access_token': 'decoded_resp_token'}
    }, {}); // initial values set to empty string
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
