import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.scss'
import SearchIcon from '../../assets/icons/Icon ionic-ios-search.svg'

const SearchBar = ({ action }) => {
  const handleSubmit = e => {
    e.preventDefault()
    action()
  }
  return (
    <form
      onSubmit={e => {
        handleSubmit(e)
      }}
      className="a-header__SearchBar"
    >
      <input type="text" placeholder="Buscar aquí producto" />
      <button type="submit">
        <SearchIcon className="searchIcon" />
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  action: PropTypes.func.isRequired
}

export default SearchBar
