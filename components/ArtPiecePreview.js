import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
  handleFavoriteButton,
  slug,
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
      <FavoriteButton onToggleFavorite={handleFavoriteButton} slug={slug}>
        Show your Love
      </FavoriteButton>
    </>
  );
}
