import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Entete({panier}) {
	console.log(panier)
	return(
		<header className="Entete">
			<h1>Magasin Général</h1>
			<nav>
				<span>Produits</span>
				<span>À propos</span>
				<span>
					<Badge badgeContent ={Object.values(panier).length} color = 'secondary'/>
				<ShoppingCartIcon/>
				<Badge/>
				
				</span>
			</nav>
		</header>
	)
}

export default Entete;