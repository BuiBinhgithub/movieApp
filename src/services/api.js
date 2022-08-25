import axios from "axios";

const searchDataMovieByKeyword = async (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=e6ecbf16`;
  const response = await axios.get(url)
  const result = response.status === 200 ? response.data : {}

  return result
}

export const api = {
    searchDataMovieByKeyword
}


