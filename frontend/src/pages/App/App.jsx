import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import NewPostPage from "../NewOrderPage/NewOrderPage.jsx"
import PostHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx"
import LoginPage from "../AuthPage/AuthPage.jsx"
import NavBar from '../../components/NavBar/NavBar.jsx'
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser())

  return (
   
      <main className="App">
        {
          user ?
          <>
          {/* NavBar and Routes are only available when user is logged in */}
            <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/posts/new" element={<NewPostPage />}/>
            <Route path="/posts" element={<PostHistoryPage />}/>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
           </>
          :
            <AuthPage setUser={setUser} />
        }
      </main>
      
    
  )
}

export default App;
