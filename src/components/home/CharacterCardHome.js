import React from 'react';
import { Link } from 'react-router-dom';

import titleCase from '../../utils/titleCase';

const CharacterCardHome = ({ person, imageLink }) => {
  const newGender = person.gender;

  return (
    <div className='character-card-container-home'>
      <div className='char-image-home'>
        <img src={imageLink} alt={person.name} />
      </div>
      <div className='char-info-home'>
        <ul>
          <li>
            <h3>{person.name}</h3>
          </li>
          <li>Born in {person.birthYear}</li>
          <li>Height {person.height}</li>
          <li>{titleCase(newGender)}</li>
        </ul>
      </div>
      <div className='char-movies-list-home'>
        <h3>Movies</h3>
        {person.films.map((film) => (
          <div key={film.id}>
            <Link to={`/film/${film.id}`} style={{ textDecoration: 'none' }}>
              <p className='film-links'>{film.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCardHome;
