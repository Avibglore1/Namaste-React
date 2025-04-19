import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import PageNotFound from './component/PageNotFound'
import Header from './component/header'
import DynamicCard from './component/DynamicCard'
import { lazy, Suspense, useEffect, useState } from 'react'
import UserContext from './utils/UerContext'
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
    <UserContext.Provider value={{loggedinUser:userName}}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/movies/:movieId' element={<DynamicCard/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
