import React, { useEffect, useState } from 'react'
import { parse } from 'query-string'
import { useLocation } from 'react-router'
import searchService from '../../services/searchService'
import Card from '../../components/Card'
import './Search.scss'

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
      <h3>Resultado de Tú busqueda</h3>
      <div className="card-container">
        {setSearchResult &&
          searchResult.map(({ id, price, nameProduct, imageUrl }) => (
            <Card key={id} price={price} nameProduct={nameProduct} imageUrl={imageUrl} id={id} />
          ))}
      </div>
    </div>
  )
}

export default Search
