import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import styles from "@/styles/Home.module.css";
import { Quote, getAllQuotes } from "@/services/QuotesService";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    getAllQuotes().then((data) => setQuotes(data));
  }, []);

  return (
    <>
      <AppBar className={styles.appBar} position="static">Quotes</AppBar>
      <Grid container spacing={4} className={styles.grid}>
        {quotes.map((quote) => (
          <Grid item xs={4}>
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
