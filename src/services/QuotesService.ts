// An interface that defines a quote.
export interface Quote {
  id: string;
  quote: string;
  author: string;
}

export async function getAllQuotes(): Promise<Quote[]> {
  const url = process.env.NEXT_PUBLIC_QUOTES_URL;
  if (!url) {
    throw new Error('NEXT_PUBLIC_QUOTES_URL is not set.');
  }

  try {
    const response = await fetch(url + '/quotes');
    if (!response.ok) {
      throw new Error(`Error fetching quotes: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
