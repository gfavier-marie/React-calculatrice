import '../styles/affichage.css'

const Affichage = ({ calcul }) => {
    return (
        <div className="affichage">
            <h2 className="affichage__result">{calcul.affichage}</h2>
        </div>
    )
}

export default Affichage
