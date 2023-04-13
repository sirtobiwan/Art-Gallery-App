import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const [pieces, setPieces] = useState([]);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // function handleRandomPiece(data) {
  //   return Math.random(data)
  // }
  function getRandomPiece(pieces) {
    const index = Math.floor(Math.random() * pieces.length);
    return pieces[index];
  }
  const randomPiece = getRandomPiece(data);

  console.log(randomPiece);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} randomPiece={randomPiece} />
    </>
  );
}
