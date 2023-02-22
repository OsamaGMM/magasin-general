import { useEffect,useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';

function Appli() {
  //On utilise le Hook useState()
  //Je veut maintenir le panier dans un objet JS surveille par React
  // const [panier, setPanier] = useState(function(){
  //   let panierLs = window.localStorage.getItem('panier-ls')
  //   if(panierLs){
  //     return JSON.parse(panierLs)
  //   }else{
  //     return {}
  //   }
  // });
  // useState avec une fonction d'initialisation d'etat
  const [panier, setPanier] = useState(()=>
    JSON.parse(localStorage.getItem('panier-ls')) || {} 
);

  useEffect(() =>{
    localStorage.setItem('panier-ls', JSON.stringify(panier))
  },[panier]);

  return (
    <div className="Appli">
      <Entete panier = {panier}/>
      <ListeProduits panier = {panier} setPanier = {setPanier}/>
      <Pied2page/>
    </div>
  );
}

export default Appli;
