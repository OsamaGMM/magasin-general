import "./PanierSommaire.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function PanierSommaire({ panier }) {
  //let tabValPanier = Object.values(panier)
  const infoPanier = calculerSommaire(panier);

  return (
    <div className="PanierSommaire">
      <input type="checkbox" id="cc-panier" />
      <label htmlFor="cc-panier">
        <Badge badgeContent={Object.values(panier).reduce((valInitiale, eltSuivant) => valInitiale + eltSuivant.qte,0)}color="secondary"/>
        <ShoppingCartIcon />
        <Badge />
      </label>
      <section className="sommaire">
        <h3>Sommaire du panier</h3>
        <div><span>Articles different</span><span>{infoPanier.articleDiff}</span></div>
        <div><span>Article total</span><span>{infoPanier.articleTotal}</span></div>
        <div><span>Sous-Total</span><span>{infoPanier.sousTotal.toFixed(2)}</span></div>
        <div><span>Taxes</span><span>{infoPanier.taxes.toFixed(2)}</span></div>
        <div><span>Total</span><span>{infoPanier.total.toFixed(2)}</span></div>
      </section>
    </div>
  );
}

function calculerSommaire(objPanier){
    const tabPanier = Object.values(objPanier)
    //Definir un object qui contient l'info sure le panier
    const info = {
        articleDiff : tabPanier.length,
        articleTotal:0,
        sousTotal:0,
        taxes:0,
        total:0
    }
    //Calculer les valeurs
    info.articleTotal = tabPanier.reduce((acc,suiv) => acc + suiv.qte, 0);
    info.sousTotal = tabPanier.reduce((acc,suiv) => acc + suiv.qte * suiv.prix, 0);
    info.taxes = info.sousTotal * 0.14975;
    info.total = info.sousTotal + info.taxes;

    return info;
}
