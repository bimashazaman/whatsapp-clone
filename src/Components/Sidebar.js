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
        <Avatar src='https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/247699214_931339464450929_5780452823757416814_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHN--GuZh1DQpHVxHTez6N6z0Fr3Rv7WI7PQWvdG_tYjtsmECruZISNQksWtMSrZI39FkqKeQaLvcuVRtRkLxKJ&_nc_ohc=vAbxJ8ZnNikAX_-kQSU&_nc_ht=scontent.fdac14-1.fna&oh=00_AT9OMOb0vF13CcJiS2HPgnHyoLVpvzOyFV4DFHNO4lmVSw&oe=61D41364' />
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
      <Head>Add new Chat</Head>
      <Chats>
        <SidebarChat />
        <SidebarChat />
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
  background-color: #dcdcdc;
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
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 15px;
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
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  font-weight: bold;
`
