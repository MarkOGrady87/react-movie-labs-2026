import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner";
import { Card, CardMedia, CardContent } from "@mui/material";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: 2,
  boxShadow: "none",
  margin: 1.5,
};

export default function MovieCredits({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["credits", { id: movie.id }],
    queryFn: getMovieCredits,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const credits = data.cast;
  return (
    <>
      <Typography variant="h5" component="h3">
        Cast
      </Typography>

      <Paper sx={root}>
        {credits.map((c) => (
          <Card key={c.credit_id} sx={{ width: 220, margin: 1 }}>
            <CardMedia
              component="img"
              height="320"
              image={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
              alt={c.name}
            />

            <CardContent>
              <Typography variant="h6">{c.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {c.character}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </>
  );
}
