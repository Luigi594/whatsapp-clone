import React, { useState, useEffect } from "react";
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);

  // fetching all the messages
  useEffect(() => {

    async function getMessages(){
      
      const request = await axios.get('/messages/async');
      setMessages(request.data);
    }

    getMessages();

  }, []);

  // this is a proof that the client is sending a message through pusher
  // and the channel we defined in the server
  useEffect(() => {

    const pusher = new Pusher('cc86595d2a568fee85ae', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data]);
    });

    // making us sure we only have a suscribe
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

    // we include the messages here, because is a dependency
    // which means that as soon as we send a message
    // is has to refresh itself
  }, [messages]);

  console.log(messages);

  return (
    <div className="App">

      <div className="app_body">

        {/** Sidebar component */}
        <Sidebar />

        {/** Chat component */}
        <Chat messages={messages} />
      </div>
    
    </div>
  );
}

export default App;
