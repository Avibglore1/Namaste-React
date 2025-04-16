import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/Aboutus'
import PageNotFound from './component/PageNotFound'
import Header from './component/header'
import DynamicCard from './component/DynamicCard'
import { lazy, Suspense } from 'react'
function App() {

  const About = lazy(()=>import('./component/Aboutus'))
  return (
    <>
    <Header></Header>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>}></Route>
      <Route path='/movies/:movieId' element={<DynamicCard/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
     </Routes>
    </>
  )
}

export default App
