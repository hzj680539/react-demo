import * as douban from './action-type'
import API from '@/api/api'

export const getMovieList = () => {
  return async dispatch => {
    let result = await API.getData('/v2/movie/top250')
    console.log('result', result)
    dispatch({
      type: douban.GET_MOVIE_LIST,
      movieList: result.subjects
    })
  }
} 
