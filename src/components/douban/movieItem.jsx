import React, { Component } from 'react'
import './style/movieItem.less'

class movieItem extends Component {

  render () {
    return (
      <section className="movie-item">
        <h3>{this.props.itemData.title}</h3>
        <div className="label">
          <span>标签：</span>
          {
            this.props.itemData.genres.map((item, index) => {
              return <span className="category" key={index}>{item}</span>
            })
          }
        </div>
        <div className="picture">
          <img src={this.props.itemData.images.small} onClick={this.props.onClick} alt=""/>
        </div>
      </section>
    )
  }
}

export default movieItem
