import React from 'react';
import { Link } from 'react-router-dom';

// import CharacterCard from ' ';

const CharacterItem = ({ character }) => {
  return (
    <div>
      <Link to={`/character/${character.id}`}>
        <div>{` \n  ${character.name}  \n `}</div>
      </Link>
    </div>
  );
};

export default CharacterItem;
