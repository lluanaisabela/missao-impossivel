import React from 'react'
import { Header } from './components/Header'

import banner from './imagens/banner.jpg'
import styles from './styles.module.css'
import './styles/global.css'
// npm install
// npm run start

// https://github.com/profchines
function App() {

  return (
    <>
      <Header />
      <img width="100%" src={banner} />
      <h1 className={styles.title}>Hello World</h1>
      <h1
        style={{
          color: 'blue',
          backgroundColor: 'red',
        }}
      >5 min pro intervalo</h1>
      <p>Primeira aula de react</p>
    </>
  );
}

export default App;
