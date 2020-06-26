import React from 'react';
import { Link } from 'react-router-dom';

const SearchedCharacter = ({ character }) => {
  return (
    <div>
      <Link
        to={`/character/${character.id}`}
        style={{ textDecoration: 'none' }}>
        <div className='search-result'>
          <h3>{` \n 🤘🏽  ${character.name}  \n `}</h3>
        </div>
      </Link>
    </div>
  );
};

export default SearchedCharacter;
