import React from 'react'
import styled from 'styled-components'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'

function Sidebar() {
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderRight>
      </Header>
      <Search>
        <SearchOutlined />
        <input placeholder='Search or start a new chat' type='text' />
      </Search>
      <Chats>
        <SidebarChat />
      </Chats>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  background: #f6f6f6;
  color: gray;
  input {
    border: none;
    background-color: white;
    width: 100%;
    border-radius: 20px;
    outline: none;
    margin-left: 10px;
  }
`

const Chats = styled.div``

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
  margin-right: 2vw;
  font-size: 24px !important ;
`
