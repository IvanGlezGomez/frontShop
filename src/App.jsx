import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './componentes/routes/mainPage/mainPage.jsx'
import Layout from './componentes/PageElements/Layout.jsx'

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
