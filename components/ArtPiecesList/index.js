import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return pieces.map((artPiece) => {
    return (
      <Link href={"/" + artPiece.slug} key={artPiece.name}>
        {artPiece.name}
        {artPiece.artist}
        {artPiece.year}
        <Image
          src={artPiece.imageSource}
          width={100}
          height={80}
          alt={artPiece.name}
        />
      </Link>
    );
  });
}
