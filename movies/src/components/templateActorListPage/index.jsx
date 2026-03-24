import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

function ActorListPageTemplate({ title, actors, page, onPageChange }) {
  /*   const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedActors = actors
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  }; */

  return (
    <>
      <Grid container>
        <Grid size={12}>
          <Header title={title} />
        </Grid>
        {/*          <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
           <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid> */}
        {/* <MovieList action={action} movies={displayedMovies}></MovieList> */}
        <Grid size={12}>
          <ActorList actors={actors} />
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={10}
          page={page}
          onChange={onPageChange}
          showFirstButton
          showLastButton
        />
      </Grid>
    </>
  );
}
export default ActorListPageTemplate;
