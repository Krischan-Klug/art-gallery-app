import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({ piece, handleToggleFavorite }) {
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
        <FavoriteButton
          onToggleFavorite={handleToggleFavorite}
          slug={piece.slug}
        >
          Love me
        </FavoriteButton>
      </div>
    </>
  );
}
