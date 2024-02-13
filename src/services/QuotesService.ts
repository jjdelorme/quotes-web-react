// An interface that defines a quote.
export interface Quote {
  id: string;
  quote: string;
  author: string;
}
// Wraps calling the backend http API to get quotes.
export const getAllQuotes = async (): Promise<Quote[]> => {
  const requestConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    "http://localhost:8083/quotes",
    requestConfig
  );
  if (!response.ok) {
    throw new Error(`Error code: ${response.status}`);
  }
  return response.json();
};
