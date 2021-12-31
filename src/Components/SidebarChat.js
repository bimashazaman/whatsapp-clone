import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import Sidebar from './Sidebar'

function SidebarChat() {
  return (
    <Wrapper>
      <Container>
        <Avatar />
        <SidebarInfo>
          <SidebarName>
            <h2>Name</h2>
            <p>this is the last message</p>
          </SidebarName>
        </SidebarInfo>
      </Container>
    </Wrapper>
  )
}

export default SidebarChat
const Wrapper = styled.div`
  //display scroll
  overflow-y: scroll;
`
const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid lightgray;
  flex: 1;
  background-color: white;

  &:hover {
    background: #dcdcdc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    transform: translateY(-2px);
  }
`

const SidebarInfo = styled.div`
  margin-left: 15px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #3c4560;
    margin-bottom: 5px;
  }
`

const SidebarName = styled.div``
