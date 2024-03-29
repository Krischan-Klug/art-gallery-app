import GlobalStyle from "../styles";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  /* console.log(pieces);
  console.log(pieces.imageSource); */
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            imageSource={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
            dimensions={piece.dimensions}
            onToggleFavorite={handleToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
