import React from 'react';
import "./Chat.css";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className='chat'> 

    {/** the chat on the header */}
      <div className="chat_header">
        <Avatar className='chat_icon' />

        <div className="chat_headerinfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
             <IconButton>
              <SearchOutlinedIcon />
            </IconButton>

            <IconButton>
              <AttachFileIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
        </div>
      </div>

      {/** and this is the chat, where all the messages are */}
      <div className="chat_body">

        {/** this is like a normal message, like someone sending us a message */}
        <p className='chat_message'>
          This is a message
          <span className='chat_timestamp'>{new Date().toLocaleTimeString()}</span>
        </p>

        {/** and this is a message from us */}
        <p className='chat_message chat_reciever'>
          This is a message
          <span className='chat_timestamp'>{new Date().toLocaleTimeString()}</span>
        </p>
      </div>

      {/** the footer, where you see the icons, the input message and the microphone icon */}
      <div className="chat_footer">
        <EmojiEmotionsOutlinedIcon />

        <form>
          <input type="text" placeholder='Type a message...' />
          <button type="submit">Send a message</button>
        </form>

        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
