import React from "react";
import Inputs from "../../components/Inputs/Inputs";
import { Grid } from "@mui/material";

import Response from "../../components/Response/Response";
import Header from "../../components/Header/Header";

const Competitors = () => {
  const questions = {
    competitors: "",
    like: "",
    dislike: "",
  }

  return (
    <>
      <Header></Header>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Inputs query={questions} id={"competitors"} next={"/product"}/>
          </Grid>
          <Grid item xs={6}>
            <Response/>
          </Grid>
        </Grid>
    </>
  )
};

export default Competitors;