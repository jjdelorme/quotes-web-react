import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import styles from "@/styles/Home.module.css";
import { Quote, getAllQuotes } from "@/services/QuotesService";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export async function getServerSideProps() {
  // Fetch data from external API
  const quotes = await getAllQuotes();

  // Pass data to the page via props
  return { props: { quotes } };
}

export default function Home(props: { quotes: Quote[] }) {
  return (
    <>
      <AppBar className={styles.appBar} position="static">Quotes</AppBar>
      <Grid container spacing={4} className={styles.grid}>
        {props.quotes.map((quote) => (
          <Grid item xs={4} key={quote.id}>
            <Card>
              <CardHeader subheader={quote.author} />
              <CardContent>{quote.quote}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

