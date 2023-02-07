import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';

function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <ListeProduits/>
      <Pied2page/>
    </div>
  );
}

export default Appli;
