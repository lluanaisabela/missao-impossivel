import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'

import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'

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
                    margin: 15
                }}
            >Filmes</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Card imagem={card1} />
                <Card />
                <Card />
                <Card />

            </div>
        </>
    );
}

export default App;
