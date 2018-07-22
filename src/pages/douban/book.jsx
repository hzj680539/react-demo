import React, { Component } from 'react'
import DouHeader from '@/components/douban/douHeader'

class Book extends Component {
  render () {
    return (
      <div>
        <DouHeader/>
        <h2>豆瓣图书</h2>
      </div>
    )
  }
}

export default Book
