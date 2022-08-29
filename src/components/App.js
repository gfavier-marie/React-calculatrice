import '../styles/app.css'
import Calculatrice from './Calculatrice'
import Affichage from './Affichage'
import React, { useState, useEffect } from 'react'

function App() {
    const [calcul, setCalcul] = useState({
        expression: '',
        affichage: 0,
    })

    return (
        <div className="App">
            <Affichage calcul={calcul} />
            <Calculatrice calcul={calcul} setCalcul={setCalcul} />
        </div>
    )
}

export default App
