import Image from "next/image";
import { useRouter } from "next/router";

export default function Slug({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const { name, imageSource, artist, year, genre } = pieces.find((piece) => {
    return piece.slug === slug;
  });

  return (
    <>
      <li key={name}>
        {name}
        {artist}
        {year}
        <Image src={imageSource} width={100} height={80} alt={name} />
      </li>
    </>
  );
}
