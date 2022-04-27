import React from 'react';
import "./SidebarChat.css";
import Avatar from '@mui/material/Avatar';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className="sidebarChat_info">
          <h3>Room name</h3>
          <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
