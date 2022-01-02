import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
  return (
    <Container>
      <Header>
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
      <Wrap>
        <Chatbody>
          <ChatMSG>
            <p>
              <Name>
                <span>
                  <strong>Name</strong>
                </span>
              </Name>
              this a msg
              <TimeStamp>{new Date().toLocaleTimeString()}</TimeStamp>
            </p>
          </ChatMSG>
        </Chatbody>

        <ChatReceiver>
          <ChatMSG>
            <p>
              this a msg
              <TimeStamp>{new Date().toLocaleTimeString()}</TimeStamp>
            </p>
          </ChatMSG>
        </ChatReceiver>
      </Wrap>

      <ChatFooter>
        <InsertEmoticonIcon />

        <form>
          <input
            // value={input}
            // onInput={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </ChatFooter>
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

  @media (max-width: 600px) {
    flex: 1;
  }
`

const Wrap = styled.div`
  background-image: url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.imgur.com%2F1Rg03go.png&f=1&nofb=1');
  flex: 1;
  padding: 30px;

  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  /* background-color: #f6f6f6; */
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
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

const Chatbody = styled.div``

const TimeStamp = styled.span`
  margin-left: 10px;
  color: gray;
  font-size: xx-small;
  background-color: #f6f6f6;
`

const ChatMSG = styled.div`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  margin-left: 10px;
`

const Name = styled.span`
  font-weight: 800;
  font-size: xx-small;
  top: -15px;
  position: absolute;
  left: 10px;
`

const ChatReceiver = styled.div`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  margin-bottom: 30px;
  border-radius: 30px;
  margin-left: 10px;
  margin-left: auto;
  /* background-color: #98ff98; */

  & > * {
    margin-left: auto;
  }

  & > *:first-child {
    margin-left: auto;
  }
`

const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding: 0 20px;
  border-top: 1px solid lightgray;
  background-color: #dcdcdc;

  form {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 16px;
      padding: 10px;
      border-radius: 10px;
      margin-left: 10px;
    }

    button {
      display: none;
    }
  }
`
