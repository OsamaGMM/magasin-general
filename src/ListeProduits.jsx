import './ListeProduits.scss';
import Produit from "./Produit";
import produits from './data/produits.json';

export default function ListeProduits(props) {

    return(
      <section className='ListeProduits'>
        <h2>Liste des produits</h2>
        <section className="produits">
        {
          produits.map(function(produit) {
            return <Produit panier = {props.panier} setPanier = {props.setPanier} key = {produit.id} nom={produit.nom} prix={produit.prix} pid={produit.id} />
          })
        }
        </section>
      </section>
    );
}