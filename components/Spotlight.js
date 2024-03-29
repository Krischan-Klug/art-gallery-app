import GlobalStyle from "../styles";
import ArtPiecePreview from "./ArtPiecePreview";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({ pieces, handleToggleFavorite }) {
  function getRandomObjectFromArray(array) {
    if (array.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }
  const randomSpotlight = getRandomObjectFromArray(pieces);
  const randomSpotlightSlug = randomSpotlight.slug;
  console.log("SpotlightSlug: ", randomSpotlight);
  /* console.log("one object: ", randomSpotlight); */
  return (
    <>
      <h2>{randomSpotlight.name}</h2>
      <Image
        alt={`${randomSpotlight.name} by ${randomSpotlight.artist}`}
        src={randomSpotlight.imageSource}
        width={randomSpotlight.dimensions.width}
        height={randomSpotlight.dimensions.height}
      ></Image>
      <h4>{randomSpotlight.artist}</h4>
    </>
  );
}
