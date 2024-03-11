import Image from "next/image";

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
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
    </>
  );
}
