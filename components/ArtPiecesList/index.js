import useSWR from "swr";
import Image from "next/image";

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

export default function ArtPieces() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return data.map((artPiece) => {
    return (
      <li key={artPiece.name}>
        {artPiece.name}
        {artPiece.artist}
        {artPiece.year}
        <Image
          src={artPiece.imageSource}
          width={100}
          height={80}
          alt={artPiece.name}
        />
      </li>
    );
  });
}
