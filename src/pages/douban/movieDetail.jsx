import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovieDetail } from '@/store/douban/action'
import { withRouter } from 'react-router-dom'
import DouHeader from '@/components/douban/douHeader'
import './style/movieDetail.less'

class MovieDetail extends Component {

  // 初始化数据
  initData () {
  }

  componentDidMount () {
    console.log('this.props.params.id', this.props.match.params.id)
    this.getMovieItem(this.props.match.params.id)
  }

  getMovieItem = id => {
    console.log('getMovieItem', id)
    this.props.getMovieDetail(id)
  }

  render () {
    return (
      <div>
        <DouHeader/>
        <div className="movie-detail">
          <h3>{this.props.movieDetail.title}&nbsp;<span>电影简介：</span></h3>
          <div className="summary">
            {this.props.movieDetail.summary}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(state => ({movieDetail: state.movieData.movieDetail}), {getMovieDetail})(MovieDetail))
