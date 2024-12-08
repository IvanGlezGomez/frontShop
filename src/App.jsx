import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './components/routes/mainPage/MainPage.jsx'
import Layout from './components/PageElements/Layout.jsx'
import SoloProduct from './components/routes/soloProduct/SoloProduct.jsx'
import AddSingleProduct from './components/forms/addProduct/AddSingleProduct.jsx'
import PageByGenre from './components/routes/pageByGenre/PageByGenre.jsx'

function App() {
  return (
    <div className='all'>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/:_id' element={<SoloProduct />} />
            <Route path='/addProduct' element={<AddSingleProduct />} />
            <Route path='/genre/:query' element={<PageByGenre />}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
