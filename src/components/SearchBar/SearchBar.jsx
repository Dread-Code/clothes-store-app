import React from 'react'
import { useHistory } from 'react-router'
import './SearchBar.scss'
import SearchIcon from '../../assets/icons/Icon ionic-ios-search.svg'
import { useForm } from '../../hooks/useForm/useForm'

const SearchBar = () => {
  const history = useHistory()

  const [values, handleInputChange, reset] = useForm({
    search: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (values.search.trim().length > 0) {
      history.push(`/search?q=${values.search}`)
    }

    reset()
  }
  return (
    <form
      onSubmit={e => {
        handleSubmit(e)
      }}
      className="a-header__SearchBar"
    >
      <input
        name="search"
        type="text"
        placeholder="Buscar aquí producto"
        value={values.search}
        onChange={handleInputChange}
      />
      <button type="submit">
        <SearchIcon className="searchIcon" />
      </button>
    </form>
  )
}

export default SearchBar
