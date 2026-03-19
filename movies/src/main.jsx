import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/FavouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviePage";
import PopularMoviesPage from "./pages/PopularMoviePage";
import NowPlayingMoviesPage from "./pages/NowPlayingMoviesPage";
import PopularPeoplePage from "./pages/PopularPeoplePage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/:pageId" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/1" /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}/>
            <Route path="/movies/toprated/:pageId" element={<TopRatedMoviesPage/>}/>
            <Route path="/movies/popular" element={<PopularMoviesPage/>}/>
            <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage/>}/>
            <Route path="/people/popular" element={<PopularPeoplePage/>}/>
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
