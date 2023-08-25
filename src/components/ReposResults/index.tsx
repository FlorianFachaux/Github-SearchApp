import { Card } from 'semantic-ui-react';
import { IRepo } from '../../@types/github';
import Repo from './Repo';

interface ReposResultsProps {
  repos: IRepo[]
}
function ReposResults({ repos }: ReposResultsProps) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {repos.map((repo) => (
        <Repo
          key={repo.id}
          repo={repo}
        />
      ))}
    </Card.Group>
  );
}

export default ReposResults;
