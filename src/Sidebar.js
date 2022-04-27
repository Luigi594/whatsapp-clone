import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <Avatar src='https://i.pinimg.com/736x/52/23/09/522309c52b83404c2025e4b64d44dfbf.jpg' />

        <div className="sidebar_headerRight">

          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />

          <input placeholder='Search or start a new chat' type="text"/>
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
