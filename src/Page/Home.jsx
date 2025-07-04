import React from 'react'
import './Home.css'
import Sidebar from '../Component/Sidebar/Sidebar'
import NavBar from '../Component/NavBar/NavBar'
import Header from '../Component/Header/Header'
import About from '../Component/About/About'
import Services from '../Component/Services/Services'
import Footer from '../Component/Footer/Footer'

const Home = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <Header />
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default Home