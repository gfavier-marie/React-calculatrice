import '../styles/calculatrice.css'
import React, { useState, useEffect } from 'react'

const Calculatrice = ({ calcul, setCalcul }) => {
    useEffect(() => {
        console.log(calcul)
    }, [calcul])
    const setCalculOnClick = (click) => {
        if (typeof click === 'number') {
            typeof calcul.affichage === 'number'
                ? setCalcul({
                      expression: calcul.expression + `${click}`,
                      affichage: `${click}`,
                  })
                : setCalcul({
                      expression: calcul.expression + `${click}`,
                      affichage: calcul.affichage + `${click}`,
                  })
        } else if (click === '.') {
            !calcul.affichage.includes('.') &&
            typeof calcul.affichage !== 'number'
                ? setCalcul({
                      expression: calcul.expression + '.',
                      affichage: calcul.affichage + '.',
                  })
                : setCalcul({
                      expression: calcul.expression,
                      affichage: calcul.affichage,
                  })
        } else if (click === '=') {
            calcul.expression &&
                setCalcul({
                    expression: calcul.expression,
                    affichage: eval(calcul.expression),
                })
        } else if (click === 'C') {
            console.log(click)
            setCalcul({
                expression: '',
                affichage: 0,
            })
        } else {
            setCalcul({
                expression: `(${calcul.expression})${click}`,
                affichage: eval(calcul.expression),
            })
        }
    }

    return (
        <div className="calculatrice">
            <button
                className="calculatrice__button calculatrice__button-light-grey"
                style={{ gridArea: '1 / 1 / 2 / 4' }}
                onClick={() => setCalculOnClick('C')}
            >
                C
            </button>
            <button
                className="calculatrice__button calculatrice__button-orange"
                style={{ gridArea: '1 / 4 / 2 / 5' }}
                onClick={() => setCalculOnClick('/')}
            >
                %
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '2 / 1 / 3 / 2' }}
                onClick={() => setCalculOnClick(7)}
            >
                7
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '2 / 2 / 3 / 3' }}
                onClick={() => setCalculOnClick(8)}
            >
                8
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '2 / 3 / 3 / 4' }}
                onClick={() => setCalculOnClick(9)}
            >
                9
            </button>
            <button
                className="calculatrice__button calculatrice__button-orange"
                style={{ gridArea: '2 / 4 / 3 / 5' }}
                onClick={() => setCalculOnClick('*')}
            >
                *
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '3 / 1 / 4 / 2' }}
                onClick={() => setCalculOnClick(4)}
            >
                4
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '3 / 2 / 4 / 3' }}
                onClick={() => setCalculOnClick(5)}
            >
                5
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '3 / 3 / 4 / 4' }}
                onClick={() => setCalculOnClick(6)}
            >
                6
            </button>
            <button
                className="calculatrice__button calculatrice__button-orange"
                style={{ gridArea: '3 / 4 / 4 / 5' }}
                onClick={() => setCalculOnClick('-')}
            >
                -
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '4 / 1 / 5 / 2' }}
                onClick={() => setCalculOnClick(1)}
            >
                1
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '4 / 2 / 5 / 3' }}
                onClick={() => setCalculOnClick(2)}
            >
                2
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '4 / 3 / 5 / 4' }}
                onClick={() => setCalculOnClick(3)}
            >
                3
            </button>
            <button
                className="calculatrice__button calculatrice__button-orange"
                style={{ gridArea: '4 / 4 / 5 / 5' }}
                onClick={() => setCalculOnClick('+')}
            >
                +
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '5 / 1 / 6 / 3' }}
                onClick={() => setCalculOnClick(0)}
            >
                0
            </button>
            <button
                className="calculatrice__button calculatrice__button-dark-grey"
                style={{ gridArea: '5 / 3 / 6 / 4' }}
                onClick={() => setCalculOnClick('.')}
            >
                .
            </button>
            <button
                className="calculatrice__button calculatrice__button-orange"
                style={{ gridArea: '5 / 4 / 6 / 5' }}
                onClick={() => setCalculOnClick('=')}
            >
                =
            </button>
        </div>
    )
}

export default Calculatrice
