import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './componentes/routes/mainPage/mainPage.jsx'
import Layout from './componentes/PageElements/Layout.jsx'
import SoloProduct from './componentes/routes/soloProduct/SoloProduct.jsx'
import AddSingleProduct from './componentes/forms/addProduct/AddSingleProduct.jsx'
import PageByGenre from './componentes/routes/pageByGenre/PageByGenre.jsx'

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
