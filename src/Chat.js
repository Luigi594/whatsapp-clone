import React, {useState} from 'react';
import "./Chat.css";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios";

function Chat({ messages }) {

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {

    e.preventDefault();

    await axios.post('/messages/new',{

      name: messages.name,
      message: input,
      timestamp: new Date().toLocaleDateString(),
      received: true
    }); 

    setInput('');
  }

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

        {messages.map((message) => (

          /** this is like a normal message, like someone sending us a message
           * but if the message was a received only then we attach the 
           * receiver class
           */
          <p className={`chat_message ${message.received && "chat_reciever"}`}>
          {message.message}
          <span className='chat_timestamp'>{message.timestamp}</span>
          </p>
        ))}

      </div>

      {/** the footer, where you see the icons, the input message and the microphone icon */}
      <div className="chat_footer">
        <EmojiEmotionsOutlinedIcon />

        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Type a message...' />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>

        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
