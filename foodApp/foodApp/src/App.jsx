import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/Aboutus'
import PageNotFound from './component/PageNotFound'
import Header from './component/header'
import DynamicCard from './component/DynamicCard'
function App() {
  return (
    <>
    <Header></Header>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/movies/:movieId' element={<DynamicCard/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
     </Routes>
    </>
  )
}

export default App
