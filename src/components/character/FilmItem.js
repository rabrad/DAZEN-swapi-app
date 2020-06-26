import React from 'react';
import { Link } from 'react-router-dom';

const FilmItem = ({ film }) => {
  return (
    <div>
      <Link
        to={`/film/${film.id}`}
        style={{ textDecoration: 'none', color: '#838383' }}>
        <ul>
          <li>{` \n  ${film.title}  \n `}</li>
        </ul>
      </Link>
    </div>
  );
};

export default FilmItem;
