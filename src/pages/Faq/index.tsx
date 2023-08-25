import { Header, Message } from 'semantic-ui-react';

function Faq() {
  return (
    <Message>
      <Header as="h2">Questions pratiques:</Header>
      <br />
      <Message.Header>A quoi ça sert ?</Message.Header>
      <p>
        Cette application permet de trouver une liste de
        dépôts GitHub en fonction de la recherche envoyée.
      </p>
      <Message.Header>Comment faire une recherche ?</Message.Header>
      <p>
        Sur la page recherche, complétez le champ de recherche et valider la recherche
        en appuyant sur la touche entrée.
      </p>
      <Message.Header>Puis-je chercher n&apos;importe quel terme ?</Message.Header>
      <p>Oui, tous les termes recherchés peuvent se trouver sur Github</p>
    </Message>
  );
}

export default Faq;
