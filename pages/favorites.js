import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ artPiecesInfo, pieces, onToggleFavorite }) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );
  return (
    <>
      <h1>A list of favorite Art Pieces</h1>
      <ArtPieces pieces={favorites} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
