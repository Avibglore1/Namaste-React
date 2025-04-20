import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import WatchList from './component/WatchList' 
import Header from './component/Header'
import DynamicCard from './component/DynamicCard'
import { lazy, Suspense, useEffect, useState } from 'react'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import store from './utils/watchListstore'

function App() {
  const About = lazy(()=>import('./component/Aboutus'))
  const [userName,setUserName] = useState();
  useEffect(()=>{
    const data = {
      name:"Avinash"
    };
    setUserName(data.name)
  },[])
  return (
    <Provider store = {store}>
      <UserContext.Provider value={{loggedinUser:userName}}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/movies/:movieId' element={<DynamicCard/>}></Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
      </Routes>
    </UserContext.Provider>
    </Provider>
    
  )
}

export default App
