import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import GridCard from '../../components/GridCard/GridCard'
import getCategory from '../../services/getCategory'
import getProductsByid from '../../services/getProductsByid'
import capitalize from '../../utils/capitalize'
import './Categories.scss'

const Categories = () => {
  const { pathname } = useLocation()
  const [products, setProducts] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const category = pathname.replace('/', '')

  useEffect(async () => {
    const result = await getCategory(category)
    const { id, name } = result[0]
    const { shop } = await getProductsByid(id)
    setProducts(shop)
    setCategoryName(name)
  }, [pathname])

  return (
    <div className="categories-container">
      <h2 className="categories-tittle">{capitalize(categoryName)}</h2>
      <div>
        <GridCard products={products} />
      </div>
    </div>
  )
}

export default Categories
