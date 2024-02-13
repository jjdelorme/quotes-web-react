import AppBar from "@mui/material/AppBar";
import styles from "@/styles/Home.module.css";
import { Quote } from "@/services/QuotesService";

// Sample quotes
const quotes : Quote[] = [
  {
    id: "0",
    quote: "It's not how much you have, but how much you enjoy that makes happiness.",
    author: "Charles Spurgeon",
  },
  {
    id: "1",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: "2",
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  }
];

export default function Home() {
  return (
    <>
      <AppBar className={styles.appBar} position="static">Quotes</AppBar>
      {quotes.map((quote) => (
        <div key="{quote.id}">{quote.quote}, {quote.author}</div>
      ))}
    </>
  );
}
