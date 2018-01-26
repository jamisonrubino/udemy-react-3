import axios from 'axios'

const API_KEY = 'bb1bc7d21304c505a1deab9f578ae9dd',
  ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// making type a constant instead of a string
// keeps action types consistent between actionCreators and reducers
// for whatever reason
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  console.log("Requests: ", request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
