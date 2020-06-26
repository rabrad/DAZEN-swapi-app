import React from 'react';
import { gql, useQuery } from '@apollo/client';

import lukeSkyWalker from '../../assets/characters/luke-skywalker.png';
import leiaOrgana from '../../assets/characters/leia-organa.png';
import r2D2 from '../../assets/characters/r2-d2.png';
import darthVader from '../../assets/characters/darth-vader.png';
import c3Po from '../../assets/characters/c-3po.png';
import CharacterCardHome from './CharacterCardHome';

const featuredCharsImgs = [lukeSkyWalker, c3Po, r2D2, darthVader, leiaOrgana];

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_PERSON);

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

  const featured = data.allPersons.filter((person) => {
    let selected =
      person.id === 'cj0nv9p8yewci0130wjy4o5fa' ||
      person.id === 'cj0nv9p9gewck0130h8f8esy0' ||
      person.id === 'cj0nv9p9wewcm01302r07xzna' ||
      person.id === 'cj0nv9pa9ewco0130v4ocnhed' ||
      person.id === 'cj0nv9pakewcq01303eu3xuy1';

    return selected;
  });

  return (
    <div className='char-list-home'>
      {featured.map((person, index) => (
        <div key={person.id}>
          <CharacterCardHome
            person={person}
            index={index + 1}
            imageLink={featuredCharsImgs[index]}
          />
        </div>
      ))}
    </div>
  );
};

const GET_PERSON = gql`
  query {
    allPersons {
      id
      name
      birthYear
      height
      gender
      films {
        id
        title
      }
    }
  }
`;

export default CharacterList;
