import React from 'react'
import PropTypes from 'prop-types'
import './Publication.scss'

const Publication = ({ data }) => (
  <div className="images-container">
    {data.map(({ image, title }) => (
      <div
        className="image"
        style={{
          backgroundImage: `url("${image}")`
        }}
      >
        <h3>{title}</h3>
      </div>
    ))}
  </div>
)

Publication.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired
}

export default Publication
