import React from 'react';
import { useParams } from 'react-router-dom';

import CharacterCard from '../components/character/CharacterCard';

const Character = () => {
  const { id } = useParams();

  return (
    <div>
      <CharacterCard characterId={id} />
    </div>
  );
};

export default Character;
