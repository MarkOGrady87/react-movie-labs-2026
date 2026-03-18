import React from "react";
import { getPopularPeople } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const PopularPeoplePage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopularPeople,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const actors = data.results;

/*   // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true  */

     return (
      <PageTemplate
        title="Popular Actors"
        actors={actors}
 /*        action={(movie) => {
        //   return <AddToFavoritesIcon movie={movie} />
        }} */
      />
  );

};
export default PopularPeoplePage;
