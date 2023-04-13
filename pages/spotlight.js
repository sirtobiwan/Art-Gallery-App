import ArtPieces from "../components/ArtPiecesList";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Spotlight({ randomPiece }) {
  console.log(randomPiece);
  return (
    <>
      <li key={randomPiece.name}>
        {randomPiece.name}
        {randomPiece.artist}
        {randomPiece.year}
        <Image
          src={randomPiece.imageSource}
          width={100}
          height={80}
          alt={randomPiece.name}
        />
      </li>
      <Navigation />
    </>
  );
}
