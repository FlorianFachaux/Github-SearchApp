import { Card, Image } from 'semantic-ui-react';
import { IRepo } from '../../@types/github';

interface RepoProps {
  repo: IRepo
}
function Repo({ repo }: RepoProps) {
  return (
    <Card>
      <Image src={repo.owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{repo.name}</Card.Header>
        <Card.Meta>
          <span className="date">{repo.owner.login}</span>
        </Card.Meta>
        <Card.Description>
          {repo.description?.slice(0, 200)}
          {repo.description && repo.description.length > 200 && '...'}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Repo;
