

import './App.css';
import ChatInterface from '/src/components/ChatInterface';
import React from 'react';
import Sidebar from './components/Sidebar';
import turinglogo from "./assets/turinglogo(lightblue).png"
import userlogo from "./assets/profile.svg"

function App() {
  // Chat state'ini burada saxlayaq ki, həm Sidebar həm də ChatInterface istifadə edə bilsin
  const [chats, setChats] = React.useState([
    {
      date: 'Bu gün',
      chats: []
    }
  ]);

  // Yeni chat əlavə etmək üçün handler
  const handleNewMessage = (message) => {
    setChats(prevChats => {
      const newChat = {
        id: Date.now().toString(),
        title: message.slice(0, 30) + (message.length > 30 ? '...' : ''),
        message: message
      };

      // "Bu gün" qrupunu yeniləyək
      if (prevChats[0]?.date === 'Bu gün') {
        return [
          {
            ...prevChats[0],
            chats: [newChat, ...prevChats[0].chats]
          },
          ...prevChats.slice(1)
        ];
      }

      // "Bu gün" qrupu yoxdursa, yeni qrup yaradaq
      return [{
        date: 'Bu gün',
        chats: [newChat]
      }, ...prevChats];
    });
  };

  return (


    <div className="container">
      <Sidebar chats={chats} />

      <div className="mainSection">
        <header className="header">
          <div className="logo">
            <img src={turinglogo} alt="Turing Logo" />
          </div>
          <div className="user-icon">
            <img src={userlogo} alt="User" />
          </div>
        </header>
        <ChatInterface onNewMessage={handleNewMessage} />
      </div>
    </div>

  );
}

export default App;