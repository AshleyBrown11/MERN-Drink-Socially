import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import UpdateUserPage from "../UpdateUserPage/UpdateUserPage.jsx"
import DeleteUser from "../DeleteUser/DeleteUser.jsx"
import LoginPage from "../LoginPage/LoginPage.jsx"
import NavBar from '../../components/NavBar/NavBar.jsx'
import { getUser } from '../../utilities/users-service';
// import Home from "../Home/Home.jsx"

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
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/posts/new" element={<UpdateUserPage user={user} setUser={setUser} />}/>
            <Route path="/posts" element={<DeleteUser user={user}/>}/>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
           </>
          :
            <LoginPage setUser={setUser} />
        }
      </main>
      
    
  )
}

export default App;
