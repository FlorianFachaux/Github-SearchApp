import { useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

interface SearchBarProps {
  onSubmitSearch: (searchText: string) => void;
}
function SearchBar({ onSubmitSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchText(newValue);
  };

  const handleSubmitForm = () => {
    // Semantic UI se charge du event.preventDefault() pour éviter de recharger la page
    // Lorsque le formulaire est envoyé, j'appelle la fonction onSubmitSearch
    onSubmitSearch(searchText);
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmitForm}>
        <Form.Field>
          <Input
            autoFocus
            placeholder="Search..."
            icon="search"
            iconPosition="left"
            value={searchText}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
