import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
  handleFavoriteButton,
}) {
  return (
    <>
      <h2>{name}</h2>
      <Image
        alt={`${name} by ${artist}`}
        src={imageSource}
        width={dimensions.width}
        height={dimensions.height}
      ></Image>
      <h4>{artist}</h4>
      <FavoriteButton onToggleFavorite={handleFavoriteButton}>
        Show your Love
      </FavoriteButton>
    </>
  );
}
