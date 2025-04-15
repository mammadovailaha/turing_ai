import React, { useState } from 'react';
import "./Sidebar.css";

const DropdownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
    <path d="M0.587183 1.16229L4.00001 4.83765L7.41284 1.16229" stroke="#666F8D" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Sidebar = ({ chats = [] }) => {
  // State
  const [isOpen, setIsOpen] = useState(true);
  const [showChatOnly, setShowChatOnly] = useState(false);
  // Default chat data
  const defaultChatGroups = [
    {
      date: 'Bu gün',
      chats: [
        { id: '1', title: 'Yeni söhbət' },
        { id: '2', title: 'Yeni söhbət' }
      ]
    },
    {
      date: 'Dünən',
      chats: [
        { id: '3', title: 'Yeni söhbət' }
      ]
    },
    {
      date: '23 Fevral',
      chats: [
        { id: '4', title: 'Yeni söhbət' },
        { id: '5', title: 'Yeni söhbət' },
        { id: '6', title: 'Yeni söhbət' }
      ]
    }
  ];

  //Icon click func

  const handleSearchClick = () => {
    setShowChatOnly(true);
  };

  // Handlers
  const handleNewChat = () => {
    console.log('Yeni chat yaradıldı');
  };



  // Render helper functions
  const renderHeader = () => (
    <div className="sidebar-header">
      <div className="header-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sidebar-button"
        >
          <img src="/src/assets/openSidebarIcon.png" alt="Menu" width="20" height="20" />
        </button>
        <button
          onClick={handleNewChat}
          className="new-chat-button"
        >
          <img src="/src/assets/newChatIcon.png" alt="New Chat" width="24" height="24" />
        </button>
        <button className='tool'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#D9D9D9" /></svg>
        </button>
        <button className='tool'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#292D32" /> </svg>
        </button>
        <button className='tool'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#FF4401" /></svg>
        </button>
        <button className='tool'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#D9D9D9" />
          </svg>
        </button>
        <button className='tool'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#B52B00" /></svg>
        </button>
        <button className='tool'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#D9D9D9" /> </svg>
        </button>
        
      </div>
      
    </div>
  );

  // chat section

  const renderChatsSection = () => (
    <div className='chat-section'>
      <div className={`chat-content ${showChatOnly ? 'chat-only' : ''}`}>
        <div className='search-section' onClick={handleSearchClick}>
          <div className="search-input">
            <input type="text" name="search" 
            placeholder='Axtar...'/>
          </div>
          <div className="search-icon-background">
            <div className='search-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="none" className='search-icon-svg'>
                <path d="M21.5999 21.6L16.6344 16.6345M2.3999 10.6759C2.3999 6.10525 6.10513 2.40002 10.6758 2.40002C15.2464 2.40002 18.9516 6.10525 18.9516 10.6759C18.9516 15.2465 15.2464 18.9517 10.6758 18.9517C6.10513 18.9517 2.3999 15.2465 2.3999 10.6759Z" stroke="white" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

        </div>

        {showChatOnly && (
          (chats.length > 0 ? chats : defaultChatGroups).map((group) => (
            <div key={group.date} className="chat-group">
              <div className="chat-date">{group.date}</div>
              {group.chats.map((chat) => (
                <div key={chat.id} className="chat-item">
                  {chat.title}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      {/* <div className="full-sidebar-content">
      
      </div> */}
    </div>


  );



  // Main render
  return (
    <div className='sidebar-collapsed'>
      {renderHeader()}


      {isOpen && (
        <div className="sidebar-content">
          {renderChatsSection()}

        </div>
      )}
    </div>
  );
};

export default Sidebar;