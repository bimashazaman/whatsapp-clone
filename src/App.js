import './App.css'
import React from 'react'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className='App'>
      <Container>
        <Body>
          <Sidebar />
        </Body>
      </Container>
    </div>
  )
}

export default App

const Container = styled.div`
  display: grid;
  place-items: center;
  background-color: #dadbd3;
  height: 100vh;
  width: 100vw;
  /* justify-content: center;
  align-items: center; */
`

const Body = styled.div`
  display: flex;
  background-color: #ededed;
  height: 90vh;
  width: 90vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
  margin-top: -50px;
`
