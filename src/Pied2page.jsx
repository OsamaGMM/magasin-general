export default function Pied2page() {
    let maintenant = new Date();
    let annee = maintenant.getFullYear();
  
    return (
      <footer>
        <hr />
        &copy; {annee} Tous droits réservés - 4PA - TIM.
      </footer>
    );
}