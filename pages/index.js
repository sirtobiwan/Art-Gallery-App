import ArtPieces from "../components/ArtPiecesList";
import Navigation from "../components/Navigation";

export default function HomePage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />
      <Navigation />
    </>
  );
}
