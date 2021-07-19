import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Home from '../../layouts/Home'
import Categories from '../../layouts/Categories'
import Search from '../../layouts/Search/Search'
import CartShop from '../../layouts/CartShop/CartShop'
// import './AppRouter.scss'

const RouterApp = ({ pathArray }) => (
  <>
    <div>
      <Switch>
        {pathArray.map(category => (
          <Route path={`/${category}`} component={Categories} key={category} />
        ))}
        <Route path="/search" component={Search} />
        <Route path="/cartshop" component={CartShop} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </>
)

RouterApp.propTypes = {
  pathArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired
}

export default RouterApp
