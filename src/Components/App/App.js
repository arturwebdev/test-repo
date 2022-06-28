import { Routes, Route } from 'react-router-dom'

import Wrapper from '../../pages/Wrapper/Wrapper'
import Home from '../Home/Home'
import Chatbox from '../Chatbox/Chatbox'
import AddPosts from '../AddPosts/AddPosts'
import SinglePage from '../SinglePage/SinglePage'

import LogIn from '../LogIn/LogIn'

import './App.css'


function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper/>}>
          <Route index element={<Home/>}/>
          <Route path="chatbox" element={<Chatbox/>}/>
          <Route path="add-posts" element={<AddPosts/>}/>
          <Route path="single-page" element={<SinglePage/>}/>
        </Route>
        <Route path="/login/:from" element={<LogIn/>}/>
      </Routes>
    </div>

  )
}

export default App
