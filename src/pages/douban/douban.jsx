import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieList } from '@/store/douban/action';
import API from '@/api/api'

class Douban extends Component {

  state = {
    total: 0,
    movieListV: []
  }

  // 初始化数据
  initData = props => {
    // this.getMovieListV('/v2/movie/top250')
    this.props.getMovieList()
  }

  getMovieListV = async url => {
    try {
      let result = await API.getData(url)
      console.log('getMovieListV', typeof result.subjects)
      this.setState({
        total: result.total,
        movieListV: result.subjects
      })
    } catch (error) {
    }
  }

  componentDidMount () {
    this.initData()
  }

  render() {
    return (
      <div>
        <h1>Douban page</h1>
        <div>{this.state.total}</div>
        <div>{JSON.stringify(this.props.movieList)}</div>
      </div>
    )
  }
}

export default connect(state => ({movieList: state.movieData.movieList}), {getMovieList})(Douban)
