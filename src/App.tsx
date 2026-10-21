import { Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import About from './pages/About'
import Contact from './pages/Contact'
import WebDev from './pages/WebDev'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#dedcc4]">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webdev" element={<WebDev />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App