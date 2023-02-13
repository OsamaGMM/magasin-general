import './Produit.scss';

export default function Produit({panier,setPanier,...props}) {
  
    function ajouterPanier(){
      //Premierement il faut obtenir une copie conforme du panier (clone)
      //Pour cloner le panier mais un peu moin bon
      //let clonePanier = JSON.parse(JSON.stringify(props.panier))
      let clonePanier = Object.assign({}, panier)

      // "Splat" pour cloner le panier
      //let clonePanier = [...panier]
      //On doit ajouter le produit au panier
      if(clonePanier[props.id]){
        clonePanier[props.id]++;
        clonePanier[panier.qte]++;

      }else{
        clonePanier[props.pid] = {prix:props.prix, qte:1}
      }
      //Puis on doit donner a setPanier la nouvelle valeur du panier
      setPanier(clonePanier);
    }


    return (
        <article className="Produit">
          <img src={'images-produits/' + props.pid + '.webp'} alt={props.nom} />
          <span className='nom'>{props.nom}</span>
          <span className="prix">{props.prix}</span>
          <button onClick={ajouterPanier}>Ajouter au panier</button>
        </article>
    );
}