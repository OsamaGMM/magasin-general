import './Entete.scss';

import PanierSommaire from './PanierSommaire';

function Entete({panier}) {
	// console.log(panier)
	// let tabValPanier = Object.values(panier)
	// console.log("OKOK" + tabValPanier)

	//Avec la method reduce() des tableau (une seule expression)
	//const nbArticle = tabValPanier.reduce((valInitiale, eltSuivant) => valInitiale + eltSuivant.qte, 0 )

	return(
		<header className="Entete">
			<h1>Magasin Général</h1>
			<nav>
				<span>Produits</span>
				<span>À propos</span>
				<span>
					<PanierSommaire panier = {panier}/>
				</span>
			</nav>
		</header>
	)
}

export default Entete;