import React from 'react';
import styles from './App.module.css';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
  <div className={styles.wrapper}>
  <Header />
  <Main />
  <Footer />  
  </div>
  )
}
export default App;
