import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const formControl = {
  margin: 1,
  minWidth: "90%",
  backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterActorsBlock(props) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <>
      <Grid size={12} sx={{ mb: 3 }}>
        <Grid container justifyContent={"center"}>
          <Grid size={3}>
            <TextField
              sx={{ ...formControl }}
              id="filled-search"
              label="Search field"
              type="search"
              value={props.titleFilter}
              onChange={handleTextChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
