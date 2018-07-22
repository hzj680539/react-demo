import * as douban from './action-type'
import API from '@/api/api'

export const getMovieList = () => {
  return async dispatch => {
    let result = await API.getData('/v2/movie/top250?count=10')
    console.log('getMovieList', result)
    dispatch({
      type: douban.GET_MOVIE_LIST,
      movieList: result.subjects
    })
  }
} 

export const getMovieDetail = id => {
  return async dispatch => {
    let result = await API.getData(`/v2/movie/subject/${id}`)
    console.log('getMovieDetail', result)
    dispatch({
      type: douban.GET_MOVIE_DETAIL,
      movieDetail: result || {}
    })
  }
} 
