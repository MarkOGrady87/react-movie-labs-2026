import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import React, { useState, } from "react";
import { getSimilarMovies } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner";
import { Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: 2,
  boxShadow: "none",
  margin: 1.5,
  backgroundColor: "#010b19",
};

export default function SimilarMovies({ movie }) {
  const navigate = useNavigate();
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["similar", { id: movie.id }],
    queryFn: getSimilarMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const similar = data.results;
  return (
    <>
      <Typography variant="h5" component="h3">
        Similar Movies
      </Typography>

      <Paper sx={root} >
        {similar.map((s) => (
          <Card key={s.id} sx={{
            width: 220, margin: 1, transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            }}
          } onClick={() => navigate(`/movies/${s.id}`)}>
            <CardMedia
              component="img"
              height="320"
              image={`https://image.tmdb.org/t/p/w500${s.poster_path}`}
              alt={s.title}
            />

            <CardContent>
              <Typography variant="h6">{s.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </>
  );
}