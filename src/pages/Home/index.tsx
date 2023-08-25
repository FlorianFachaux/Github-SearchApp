import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import Message from '../../components/Message';
import ReposResults from '../../components/ReposResults';
import SearchBar from '../../components/SearchBar';
import { IGithubResponseApi } from '../../@types/github';

function Home() {
  // Je stocke mes données dans un state
  // Je précise le type des données et je lui attribue une valeur par défaut
  const [reposData, setReposData] = useState<IGithubResponseApi>({
    total_count: 0,
    items: [],
  });

  const [pageNumber, setPageNumber] = useState(1);
  const [textToSearch, setTextToSearch] = useState('');

  const handleSubmitSearch = (searchText: string) => {
    // Lorsque le formulaire est envoyé, j'appelle mon API avec axios
    // en lui passant la valeur de la recherche
    setTextToSearch(searchText);
    setPageNumber(1);
  };

  useEffect(() => {
    const fetchRepos = () => {
      // Si je n'ai pas de texte à rechercher, je ne fais rien
      if (!textToSearch) {
        return;
      }
      axios
        .get(`https://api.github.com/search/repositories?q=${textToSearch}&sort=stars&order=desc&page=${pageNumber}&per_page=9`)
        .then((response) => {
          // Lorsque j'ai reçu la réponse de l'API, je vais mettre à jour
          // mes données stocker dans le state
          if (pageNumber > 1) {
            // Notre fonction setReposData prend 2 paramètres différents
            setReposData((data) => ({
              // Je met le total_count à jour avec la valeur récupérer depuis l'API
              total_count: response.data.total_count,
              items: [
                // Je concatène mes anciens items avec les nouveaux items récupérés depuis l'API
                ...data.items,
                ...response.data.items,
              ],
            }));
          } else {
            setReposData(response.data);
          }
        });
    };

    fetchRepos();
  }, [pageNumber, textToSearch]);
  return (
    <div>
      <SearchBar onSubmitSearch={handleSubmitSearch} />
      <Message
        message={`La recherche a donné ${reposData.total_count} résultat${reposData.total_count > 1 ? 's' : ''}`}
      />

      <ReposResults repos={reposData.items} />
      {reposData.total_count > pageNumber * 9 && (
      <Segment textAlign="center">
        <Button onClick={() => setPageNumber(pageNumber + 1)}>
          Charger plus de résultats
        </Button>
      </Segment>
      )}
    </div>
  );
}

export default Home;
