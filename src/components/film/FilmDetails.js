import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import posterUrls from '../../assets/posters/posterUrls';

const FilmItem = ({ id }) => {
  let history = useHistory();
  const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });

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

  const { title, director, producers, releaseDate, openingCrawl } = data.Film;
  const date = new Date(releaseDate).getFullYear();

  return (
    <div>
      <p onClick={handleClick} className='button-back'>
        <i className='fa fa-arrow-left' aria-hidden='true'></i> Back to actors
        search
      </p>

      <div>
        <div className='container-card'>
          <img src={posterUrls[title]} alt={title} />
          <div className='card-wrapper'>
            <div>
              <h2>{title}</h2>
              <div className='card-info'>
                <p>Director: {director}</p>
                <p>
                  Producers:
                  {producers.map((producer, i) => (
                    <span key={i}> {`${' '} ${producer} ${' '}`} </span>
                  ))}
                </p>
                <p>Release Date: {date}</p>
              </div>
            </div>
            <div className='card-info-last-p'>
              <p>Opening crawl: </p>
              <p> {openingCrawl}</p>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GET_FILM = gql`
  query($id: ID!) {
    Film(id: $id) {
      title
      director
      producers
      releaseDate
      openingCrawl
    }
  }
`;

export default FilmItem;
