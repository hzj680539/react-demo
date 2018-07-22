import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieList, getMovieDetail } from '@/store/douban/action';
import { withRouter } from 'react-router-dom'
import DouHeader from '@/components/douban/douHeader'
import MovieItem from '@/components/douban/movieItem'

class Movie extends Component {

  componentDidMount () {
    this.props.getMovieList()
  }

  gotoMovieDetail = id => {
    this.props.history.push(`/douban/movie/detail/${id}`)
  }

  render () {
    return (
      <div>
        <DouHeader/>
        <div>
          {
            this.props.movieList.map((item, index) => {
              return <MovieItem itemData={item} key={index} onClick={this.gotoMovieDetail.bind(this, item.id)} />
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(connect(state => ({movieList: state.movieData.movieList}), {getMovieList, getMovieDetail})(Movie))
