import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Container } from "react-bootstrap"
import TheFooter from "./components/layout/TheFooter"
import TheHeader from "./components/layout/TheHeader"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"

const App = () => {
  return (
    <Router>
      <TheHeader />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <TheFooter />
    </Router>
  )
}

export default App
