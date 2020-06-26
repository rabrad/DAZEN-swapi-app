import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import SearchedCharacter from './SearchedCharacter';

const Search = () => {
  const [query, setQuery] = useState('');

  const [getPersons, { loading, data, error }] = useLazyQuery(GET_PERSON);

  function OnChange(e) {
    setQuery(e.target.value);
  }

  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  if (error)
    return (
      <div negative>
        <h2>Error!</h2>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      <div className='search_box'>
        <input
          type='text'
          placeholder='Search Characters...'
          onChange={OnChange}
          onClick={() => getPersons()}
          value={query}
        />
        <i className='fas fa-search'></i>
      </div>
      {query.length >= 3 && (
        <div>
          {data.allPersons
            .filter((character) =>
              character.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((character) => (
              <SearchedCharacter key={character.id} character={character} />
            ))}
        </div>
      )}
    </div>
  );
};

const GET_PERSON = gql`
  query {
    allPersons {
      id
      name
    }
  }
`;
export default Search;
