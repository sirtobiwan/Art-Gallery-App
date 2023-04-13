import Image from "next/image";
import App from "../../pages/_app";

export default function ArtPieces({ pieces }) {
  return pieces.map((artPiece) => {
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
