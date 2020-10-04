import React from "react"
import { Container } from "react-bootstrap"
import TheFooter from "./components/layout/TheFooter"
import TheHeader from "./components/layout/TheHeader"

const App = () => {
  return (
    <>
      <TheHeader />
      <main className='py-3'>
        <Container>
          <h1>Welcome To Proshop</h1>
        </Container>
      </main>
      <TheFooter />
    </>
  )
}

export default App
