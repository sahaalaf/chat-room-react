import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinChat from './components/JoinChat';
import Chat from './components/Chat';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JoinChat />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
