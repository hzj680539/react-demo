import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style/douHeader.less'

class DouHeader extends Component {
  render () {
    return (
      <div className="dou-header">
        <ul>
          <li><NavLink to="/douban/movie">豆瓣电影</NavLink></li>
          <li><NavLink to="/douban/book">豆瓣图书</NavLink></li>
          <li><NavLink to="/douban/music">豆瓣音乐</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default DouHeader
