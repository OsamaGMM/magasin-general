import { Badge } from "@mui/material";
import "./Produit.scss";

export default function Produit({ panier, setPanier, nom, prix, pid }) {
  function ajouterPanier() {
    //Premierement il faut obtenir une copie conforme du panier (clone)
    //Pour cloner le panier mais un peu moin bon
    //let clonePanier = JSON.parse(JSON.stringify(props.panier))
    let clonePanier = Object.assign({}, panier);

    // "Splat" pour cloner le panier
    //let clonePanier = [...panier]
    //On doit ajouter le produit au panier
    if (clonePanier[pid]) {
      clonePanier[pid].qte++;
      //marche pas encore
      // clonePanier.panier.qte++;
    } else {
      clonePanier[pid] = { prix: prix, qte: 1 };
    }
    //Puis on doit donner a setPanier la nouvelle valeur du panier
    setPanier(clonePanier);
  }

  return (
    <article className="Produit">
      <img src={"images-produits/" + pid + ".webp"} alt={nom} />
      <span className="nom">{nom}</span>
      <span className="prix">{prix}</span>
      <Badge color="success" badgeContent={(panier[pid]) ? panier[pid].qte : 0 }>
        <button onClick={ajouterPanier}>Ajouter au panier</button>
      </Badge>
    </article>
  );
}
