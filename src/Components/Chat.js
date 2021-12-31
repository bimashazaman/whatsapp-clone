import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons'

function Chat() {
  return (
    <Container>
      <Header>
        <Avatar />
        <Info>
          <h3>Name</h3>
          <p>last seen at.....</p>
        </Info>

        <HeaderRight>
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderRight>
      </Header>

      <Chatbody>
        <p>
          <span>
            <strong>Name</strong>
          </span>
          this a msg
          <TimeStamp>{new Date().toLocaleTimeString()}</TimeStamp>
        </p>
      </Chatbody>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
  border-bottom: 1px solid lightgray;

  &:last-child {
    border-bottom: none;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  align-items: center;
`

const Info = styled.div`
  flex: 1;
  padding-left: 20px;
  justify-content: end;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin: 0 10px;
  }

  & > *:last-child {
    margin-right: 0;
  }

  & > *:first-child {
    margin-left: 0;
  }

  & > *:nth-child(2) {
    margin-left: 0;
  }

  & > *:nth-child(3) {
    margin-left: 0;
  }
`

const Chatbody = styled.div`
  flex: 1;
  padding: 20px;
  background-image: url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.imgur.com%2F1Rg03go.png&f=1&nofb=1');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f6f6f6;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #f6f6f6;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const TimeStamp = styled.span``
