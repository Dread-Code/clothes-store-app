import React, { useEffect, useState } from 'react'
import { parse } from 'query-string'
import { useLocation } from 'react-router'
import searchService from '../../services/searchService'
import './Search.scss'
import GridCard from '../../components/GridCard/GridCard'

const Search = () => {
  const location = useLocation()
  const { q } = parse(location.search)

  const [searchResult, setSearchResult] = useState([])

  useEffect(async () => {
    if (q.trim().length > 0) {
      const result = await searchService(q)
      if (result) {
        setSearchResult(result)
      }
    }
  }, [q])
  return (
    <div className="search">
      {searchResult.length <= 0 && <h2>No se encontro el producto</h2>}
      <h3 className="layout-title">Resultado de Tú busqueda</h3>
      {setSearchResult.length > 0 && <GridCard products={searchResult} />}
    </div>
  )
}

export default Search
