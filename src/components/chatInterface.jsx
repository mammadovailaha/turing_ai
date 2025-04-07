import React, { useState } from 'react';
import globallogo from "../assets/global.svg"
import lamplogo from "../assets/lamp-on.svg"
import linklogo from "../assets/link-2.svg"
import vectorlogo from "../assets/Vector.svg"
import  "./chatInterface.css"

function ChatInterface({ onNewMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onNewMessage(message);
      setMessage('');
    }
  };

  return (
    <main className="chat-container">
      <div className="chat-messages">
        <div className="welcome-message">
          <h2>Salam Turingçi,</h2>
          <h2>Sənə necə kömək edə bilərəm?</h2>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          placeholder="Sual verin..."
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <div className="chat-actions">
          <div className="left-actions">
            <button type="button" className="action-button">
              AI
            </button>
            <button type="button" className="action-button">
              <img src={globallogo} alt=""/>
              Axtar
            </button>
            <button type="button" className="action-button">
              <img src={lamplogo} alt=""/>
              Dərin Analiz
            </button>
          </div>
          
          <div className="right-actions">
            <button type="button" className="action-button">
              <img src={linklogo} alt=""/>
            </button>
            <button type="submit" className="action-button">
              <img src={vectorlogo} alt=""/>
            </button>
          </div>
          
        </div>
       
      </form>
      <footer className="footer">
        <p>Turing AI-dan istifadə etdikdə limitli olduğunu unutmayın.</p>
      </footer>
     
    </main>
    
  );
}

export default ChatInterface;