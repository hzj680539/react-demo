import * as douban from './action-type'

let defaultState = {
  title: '电影列表',
  movieList: []
}

export const movieData = (state = defaultState, action = {}) => {
  console.log('movieData action', action)
  switch (action.type) {
    case douban.GET_MOVIE_LIST:
      return {...state, movieList: action.movieList}
    case douban.GET_MOVIE_DETAIL:
      return {...state}
    default:
      return state
  }
}