import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import anonChar from '../../assets/characters/anon-char.png';
import titleCase from '../../utils/titleCase';
import FilmItem from './FilmItem';

const CharacterCard = ({ characterId }) => {
  let history = useHistory();

  const { loading, data, error } = useQuery(GET_CHARACTER, {
    variables: { id: characterId },
  });

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

  function handleClick() {
    history.push('/');
  }

  const {
    name,
    birthYear,
    height,
    gender,
    skinColor,
    homeworld,
    films,
  } = data.Person;

  return (
    <div>
      <p onClick={handleClick} className='button-back'>
        <i className='fa fa-arrow-left' aria-hidden='true'></i> Back to actors
        search
      </p>

      <div>
        <div className='container-card'>
          <img src={anonChar} alt={name} />
          <div className='char-card-wrapper'>
            <div>
              <h2>{name}</h2>
              <div className='char-card-list-info'>
                <ul>
                  <li>Birth Year: {birthYear}</li>
                  <li>Hight: {height}</li>
                  <li>Gender: {titleCase(gender)}</li>
                  <li>Skin Color: {titleCase(skinColor.toString())}</li>
                  <li>Home World: {homeworld.name}</li>
                </ul>
              </div>
            </div>
            <div className='char-card-list-movies'>
              <h2> Movies</h2>
              {films.map((film) => (
                <FilmItem key={film.id} film={film} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GET_CHARACTER = gql`
  query getPerson($id: ID!) {
    Person(id: $id) {
      name
      birthYear
      skinColor
      gender
      height
      films {
        id
        title
      }
      homeworld {
        name
      }
    }
  }
`;

export default CharacterCard;
