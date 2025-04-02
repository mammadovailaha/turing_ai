import React, { useState } from 'react';
import "./Sidebar.css";

const DropdownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
    <path d="M0.587183 1.16229L4.00001 4.83765L7.41284 1.16229" stroke="#666F8D" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Sidebar = ({ chats = [] }) => {
  // State
  const [isOpen, setIsOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isToolsOpen, setIsToolsOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Data
  const aiTools = [
    { id: '1', name: 'Gemini' },
    { id: '2', name: 'DeepSeek' },
    { id: '3', name: 'Claude' }
  ];

  // Handlers
  const handleNewChat = () => {
    console.log('Yeni chat yaradıldı');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Axtarış:', e.target.value);
  };

  // Render helper functions
  const renderHeader = () => (
    <div className="sidebar-header">
      <div className="header-left">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="sidebar-button"
        >
          <img src="/src/assets/sidebarOpen.png" alt="Menu" width="20" height="20" />
        </button>
        <button 
          onClick={handleNewChat}
          className="new-chat-button"
        >
          <img src="/src/assets/newChat.png" alt="New Chat" width="24" height="24" />
        </button>
      </div>
      {isOpen && (
        <button 
          className="search-button"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <img src="/src/assets/Search.png" alt="Search" width="24" height="24" />
        </button>
      )}
    </div>
  );

  const renderSearchInput = () => (
    isSearchOpen && isOpen && (
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Axtarış..."
          className="search-input"
        />
      </div>
    )
  );

  const renderChatsSection = () => (
    <div style={{ marginBottom: '16px' }}>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`dropdown-button chats-button ${isChatOpen ? 'is-open' : ''}`}
      >
        <span>Chats</span>
        <span className="dropdown-icon">
          <DropdownIcon />
        </span>
      </button>
      
      {isChatOpen && (
        <div className="dropdown-content">
          {(chats.length > 0 ? chats : defaultChatGroups).map((group) => (
            <div key={group.date} className="chat-group">
              <div className="chat-date">{group.date}</div>
              {group.chats.map((chat) => (
                <div
                  key={chat.id}
                  className="chat-item"
                >
                  {chat.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderToolsSection = () => (
    <div>
      <button
        onClick={() => setIsToolsOpen(!isToolsOpen)}
        className="dropdown-tool-button"
      >
        <span>Other Turing Tools</span>
        <span className="dropdown-icon">
          <DropdownIcon />
        </span>
      </button>
      
      {isToolsOpen && (
        <div className="dropdown-content">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className="tool-item"
            >
              {tool.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Main render
  return (
    <div className={`sidebar ${isOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      {renderHeader()}
      {renderSearchInput()}
      
      {isOpen && (
        <div className="sidebar-content">
          {renderChatsSection()}
          {renderToolsSection()}
        </div>
      )}
    </div>
  );
};

export default Sidebar;