import './Entete.scss';

function Entete(props) {
	let panier = props.panier
console.log(props.lePanier)
	return(
		<header className="Entete">
			<h1>Magasin Général</h1>
			<nav>
				<span>Produits</span>
				<span>À propos</span>
				<span>Panier ({Object.values(panier).length})</span>
			</nav>
		</header>
	)
}

export default Entete;