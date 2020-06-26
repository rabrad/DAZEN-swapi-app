import React from 'react';
import { useParams } from 'react-router-dom';

import FilmDetails from '../components/film/FilmDetails';

const Film = ({ index }) => {
  const { id } = useParams();
  return (
    <div>
      <FilmDetails id={id} index={index} />
    </div>
  );
};

export default Film;
