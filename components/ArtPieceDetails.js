import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ piece }) {
  console.log(piece);
  const router = useRouter();

  return (
    <>
      <div>
        <h1>{piece.title}</h1>
        <Image
          src={piece.imageSource}
          alt={`${piece.title} by ${piece.artist}`}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
        ></Image>
        <p>{piece.artist}</p>
        <p>{piece.year}</p>
        <p>{piece.genre}</p>
        <button onClick={() => router.push("/")}>Back</button>
      </div>
    </>
  );
}
