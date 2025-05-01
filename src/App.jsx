import React from 'react'
import Header from './components/Header'
import Main from './components/Main'  
import Footer from './components/Footer'
import ProductInfo from './components/ProductInfo'
import List from './components/List'
import Userlist from './components/Userlist'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Userlist/>
      <List/>
      <ProductInfo/>
      <Footer/>
    </>
  )
}

export default App




