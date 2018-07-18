import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieList } from '@/store/douban/action';
import DouHeader from '@/components/douban/douHeader'
import MovieItem from '@/components/douban/movieItem'

class Douban extends Component {

  // 初始化数据
  initData () {
    this.props.getMovieList()
  }

  componentWillMount () {
    this.initData()
  }

  render () {
    return (
      <div>
        <DouHeader/>
        <div>
          {
            this.props.movieList.map((item, index) => {
              return <MovieItem itemData={item} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({movieList: state.movieData.movieList}), {getMovieList})(Douban)
