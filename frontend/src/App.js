import React from "react"
import { Container } from "react-bootstrap"
import TheFooter from "./components/layout/TheFooter"
import TheHeader from "./components/layout/TheHeader"
import HomeScreen from "./screens/HomeScreen"

const App = () => {
  return (
    <>
      <TheHeader />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <TheFooter />
    </>
  )
}

export default App
